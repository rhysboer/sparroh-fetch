
export async function findItemsAmazon(onSuccess) {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    try{
        const results = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                const elements = document.querySelector('script[type="a-state"][data-a-state*="turbo-checkout-product-state"]');
                if(!elements)
                    return null;
                
                const data = JSON.parse(elements.textContent).lineItemInputs;
                     
                const items = [];
                data.forEach(e => {
                    // TODO: Error handle this
    
                    const item = document.querySelector(`[data-asin="${e.asin}"]`);
                    const attribute = item.getAttribute('data-subtotal');
                    const imageElement = item.querySelector('.sc-product-image');
    
                    const json = JSON.parse(attribute);
                    const amount = Number.parseInt(json.numberOfItems);
                    const total = Number.parseFloat(json.subtotal.amount);
                    
                    items.push({
                        id: e.asin,
                        title: e.productTitle,
                        code: json.subtotal.code,
                        amount: total / amount,
                        image: imageElement.src
                    });
                });
                    
                return items;
            }
        });

        const success = results[0].result != null;
        if(success){
            onSuccess(results[0].result);
            return true;
        }

        return false;
    }
    catch {
        return false;
    }
}
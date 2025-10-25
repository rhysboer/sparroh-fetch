
export async function findItemsAmazon(onFinish) {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            const elements = document.querySelector('script[type="a-state"][data-a-state*="turbo-checkout-product-state"]');
            if(!elements)
                return [];
            
            const data = JSON.parse(elements.textContent).lineItemInputs;
            console.log(data);
            
            const items = [];
            data.forEach(e => {
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

    onFinish(results[0].result);
}
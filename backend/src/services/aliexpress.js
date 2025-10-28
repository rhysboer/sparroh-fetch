
async function searchItems(keywords, currency_code = 'USD', max_price = null) {
    const url = process.env.ALX_URL;
    const params = new URLSearchParams({
        ship_to_country: 'US',
        keywords: keywords,
        target_currency: 'AUD',
        target_language: 'EN',
        page_size: 50
    });

    // Currently broken in the API
    /*if(max_price != null){
        params.set('max_sale_price', max_price);
    }*/

    console.log(`${url}?${params.toString()}`);
    const response = await fetch(`${url}?${params.toString()}`, {
        mode: 'cors', method: 'GET',
        headers:
        {
            'x-rapidapi-host': process.env.ALX_HOST,
            'x-rapidapi-key': process.env.RAPID_API_KEY,
        }
    });
    
    if (!response.ok) {
        return { code: 500, data: [] };
    }

    const json = await response.json();
    const output = [];

    if(json == null){
        // TODO
        throw new Error('TODO THIS');
    }

    const products = json.products.product;
    console.log('Products Found: ', products.length);

    products.forEach(e => {
        const score = parseFloat(e.evaluate_rate ?? 0);
        const price = parseFloat(e.target_original_price);
        
        if(score > 80.0 && price <= max_price) {
            output.push({
                store: 'aliexpress',
                url: `https://www.aliexpress.com/item/${e.product_id}.html`,
                price: price,
                image: e.product_main_image_url,
                title: e.product_title
            });
        }
    });

    return { code: 200, items: output };
}

module.exports = {
    searchItems
}
const { searchItems } = require('../services/aliexpress');
const { summariseProductTitle } = require('../services/summary');
const { getData, setData } = require('../services/redisClient');

async function findItems(req, res){
    const id = req.body.cart.id;
    const title = req.body.cart.title;
    const cost = req.body.cart.amount;
    const code = req.body.cart.code;
    const max_price = cost * 1.20; // Add 20% of the current price as a max price filter

    console.log(req.body);

    let isCached = true;
    let data = await getData(id);


    if(data == null){
        isCached = false;

        const keywords = await summariseProductTitle(title);
        if(keywords == null){
            res.status(500).json({'error': 'A serverside error has occurred'});
            return;
        }

        const results = await searchItems(keywords, code, max_price);

        if(results.code != 200){
            res.status(500);
            return;
        }

        data = results.items;
    }else{
        console.log('cache hit');
        data = JSON.parse(data);
    }
    
    res.json({
        id: id,
        items: data
    });

    if(!isCached && data != null && data.length > 0) {
        setData(id, JSON.stringify(data));
    }
}

module.exports = {
    findItems,
}  
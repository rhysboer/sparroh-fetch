const { searchItems } = require('../services/aliexpress');
const { summariseProductTitle } = require('../util/summary');

async function findItems(req, res){
    const id = req.body.cart.id;
    const title = req.body.cart.title;
    const cost = req.body.cart.amount;
    const code = req.body.cart.code;
    const max_price = cost * 1.20; // Add 20% of the current price as a max price filter

    console.log(req.body);
    const keywords = await summariseProductTitle(title);
    const results = await searchItems(keywords, 'AUD', max_price);

    //res.json({});
    //return;

    if(results.code != 200){
        res.status(500);
        return;

    }

    res.json({
        id: id,
        items: results.items
    });
}

module.exports = {
    findItems,
}  
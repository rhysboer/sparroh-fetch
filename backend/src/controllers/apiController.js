const { searchItems } = require('../services/aliexpress');

async function findItems(req, res, next){
    console.log(req.body);
    
    const id = req.body.cart.id;
    const results = await searchItems('GBA SP Screen', 15, 'AUD');

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
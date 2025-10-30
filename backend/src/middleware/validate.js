const validCodes = new Set(["USD", "GBP", "CAD", "EUR", "UAH", "MXN", "TRY", "RUB", "BRL", "AUD", "INR", "JPY", "IDR", "SEK", "KRW", "ILS", "THB", "CLP", "VND"]);

function validateCode(code){
    if(typeof(code) === 'string') 
        return validCodes.has(code.toLocaleUpperCase()) ? code : 'USD';
    return 'USD';
}

function validateTitle(title){
    if(typeof(title) !== 'string'){
        return false;
    }

    const length = title.length;
    if(length <= 0 || length > 200){
        return false;
    }

    return true;
}

function validateAmount(amount){
    console.log(typeof(amount));
    if(typeof(amount) !== 'number'){
        return false;
    }

    if(amount <= 0) {
        return false;
    }

    return true;
}

function validate(req, res, next){
    if(!req.body.cart){
        return res.status(400).json({ error: 'Invalid cart' });
    }

    if(validateAmount(req.body.cart.amount) == false){
        return res.status(400).json({ error: 'Invalid amount' });
    }
    
    if(validateTitle(req.body.cart.title) == false) {
        return res.status(400).json({ error: 'Invalid title' });
    }

    const code = req.body.cart.code;
    req.body.cart.code = validateCode(code);

    next();
}

module.exports = {
    validate
}
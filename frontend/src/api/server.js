
// TODO, handle errors
export default function findMatches(id, title, price, price_code, onFinish){
    fetch('http://localhost:8080/api/items', {
        mode: 'cors', method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'cart': {
            id: id,
            amount: price,
            code: price_code,
            title: title
        }})
    })
    .then(res => {
        if(res.ok)
            return res.json();
        onFinish({ id }, true);
    })
    .then(res => {
        onFinish(res, false);
    });
}
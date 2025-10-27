
export default function findMatches(item, onFinish){
    fetch('http://localhost:8080/api/items', {
        mode: 'cors', method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'cart': item })
    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onFinish(res, false);
    });
}
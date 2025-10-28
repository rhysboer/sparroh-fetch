import levenshtein from 'js-levenshtein';

export function sortByPrice(items, ascending = true){
    if(ascending){
        items.sort((a, b) => a.price - b.price);
    }else{
        items.sort((a, b) => b.price - a.price);
    }
}

/*
    A quick and dirty way to measure 'relevance' is to match words between items in the cart and 
    the similar items returned from the server. 

    Using the Levenshtein distance metric to track difference between words.
*/
export function sortByRelevance(items, title){
    const titleWords = title.toLowerCase().split(' ');
    const values = [];

    items.forEach((e, i) => {
        const words = e.title.split(' ');
        let score = 0;

        words.forEach(wordA => {
            let lowest = 100000;
            titleWords.forEach(wordB => {
                lowest = Math.min(levenshtein(wordA, wordB), lowest);
            });

            if(titleWords.length > 0){
                score += score;
            }
        });

        values.push({
            index: i,
            score: score
        });
    });
    
    values.sort((a, b) => a.score - b.score);
    values.forEach((e, i) => {
        const index = e.index;
        const temp = items[i];

        items[i] = items[index];
        items[index] = temp;
    });
}
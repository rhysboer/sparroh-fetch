import levenshtein from 'js-levenshtein';

export function sorter(items, title, sortId){
    switch(sortId){
        case 0: sortByRelevance(items, title); break;
        case 1: sortByPrice(items, true); break;
        case 2: sortByPrice(items, false); break;
        default: console.error(`Invalid sort ID of ${sortId}`); break;
    }
}

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
        const words = e.title.toLowerCase().split(' ');
        let score = 0;

        words.forEach(wordA => {
            let lowest = 100000;
            titleWords.forEach(wordB => {
                const value = levenshtein(wordA, wordB);
                lowest = Math.min(value, lowest);
            });

            if(titleWords.length > 0){
                score += lowest;
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
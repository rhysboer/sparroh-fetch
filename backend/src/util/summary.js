const { pipeline } = require('@huggingface/transformers');

let summarisation = null;

async function initalisePipeline() {
    if(summarisation == null){
        console.log('=== Starting Summerisation Pipeline === ')
        summarisation = await pipeline('summarization', 'Xenova/flan-t5-small');
        console.log('=== Initalised Summerisation Pipeline ===');
    }
}

async function summariseProductTitle(title){
    if(summarisation == null){
        throw new Error('Summerisation pipeline is not initalised.');
    }

    const text = `Without adding new words, summerize the follow title into a keyword-friendly product title: "${title}"`;
    const result = await summarisation(text, {
        max_length: 10,  
        min_length: 3,   
        do_sample: false
    });

    console.log('summerise output: ', result);
    console.log(result);
    return result[0].summary_text;
}

module.exports = {
    initalisePipeline,
    summariseProductTitle
}
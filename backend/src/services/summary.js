const OpenAI = require('openai');

let client = null;

async function initialisePipeline() {
    if(client == null){
        console.log('=== Initialising Pipeline ===');
        client = new OpenAI({
            apiKey: process.env.GPT_KEY
        });
    }
}

async function summariseProductTitle(title){
    const response = await client.responses.create({
        model: "gpt-5-nano",
        reasoning: { effort: 'minimal' },
        text: { format: { type: 'json_object' }},
        max_output_tokens: 300,
        input: [
            {
                role: "developer",
                content: process.env.GPT_PROMPT
            },
            {
                role: "user",
                content: title
            }
        ]
    }).catch(async (err) => {
        console.error(err);
        return null;
    });

    if(!response || response.output.length <= 0)
        return null;

    const messages = response.output.find(e => e.type === 'message');
    if(!messages || messages.content.length <= 0)
        return null;

    const output = messages.content.find(e => e.type === 'output_text');
    if(!output || !output.text)
        return null;

    const result = JSON.parse(output.text);
    if(!result || !result.title)
        return null;

    console.log(result);
    return result.title;
}

module.exports = {
    initialisePipeline,
    summariseProductTitle
}
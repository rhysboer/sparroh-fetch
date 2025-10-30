const { createClient } = require('redis');

/** @type {import('redis').RedisClientType} */
let client = null;

async function initialiseRedis(){
    if(process.env.USE_CACHE == false){
        return;
    }

    if(client != null){
        return;
    }

    console.log('=== Starting Redis Client ===');

    const name = process.env.REDIS_NAME || 'redis';
    const port = process.env.REDIS_PORT || 6379;

    client = createClient({
        url: `redis://${name}:${port}/`
    });

    client.on('error', (err) => console.log('Redis', err));

    await client.connect();
    console.log('=== Initialised Redis Client ===');
}

async function setData(key, data){
    if(process.env.USE_CACHE == false){
        return null;
    }

    if(client == null){
        throw new Error('Redis client not initialised')
    }

    await client.set(key, data, {
        EX: 60 * 60 * 24, // 24 Hours 
        NX: true
    });
}

async function getData(key){
    if(process.env.USE_CACHE == false){
        return null;
    }

    if(client == null){
        throw new Error('Redis client not initialised')
    }
    
    return await client.get(key);
}

module.exports = {
    initialiseRedis,
    getData,
    setData
}
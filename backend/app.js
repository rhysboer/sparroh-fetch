require('dotenv').config();
const cors = require('cors');
const express = require('express');
const apiRouter = require('./src/routes/apiRoute');
const { initialisePipeline } = require('./src/services/summary');
const { initialiseRedis } = require('./src/services/redisClient');

const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRouter);

(async () => {
    await initialisePipeline();
    await initialiseRedis();

    const PORT = process.env.PORT || 8080;
    
    app.listen(PORT, () => {
        console.log(`=== Listening on port ${PORT} ===`);
    });
})();
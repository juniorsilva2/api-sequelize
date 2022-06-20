const redis = require('redis')
require('dotenv').config()

const client = redis.createClient({
    url:`redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});


(async()=>{
    await client.connect()
})()

module.exports = client
import redis from 'redis';

const redisClient = redis.createClient();


redisClient.on('error', (err) => {
    console.log('Error ' + err);
    }
);

redisClient.on('connect', () => {
    console.log('Redis is ready');
    }
);

await redisClient.connect();

redisClient.set('key', 'Solve value');
console.log(await redisClient.get('key'));



import Redis from 'ioredis';
import type { PkgSize } from '../../types';

const { REDIS_URL = '' } = process.env;
delete process.env.REDIS_URL;

if (!REDIS_URL) {
    throw new Error('Missing REDIS_URL environment variable');
}

try {
    new URL(REDIS_URL);
} catch (err) {
    throw new Error('Invalid REDIS_URL environment variable');
}

const client = new Redis(REDIS_URL);

client.on('error', err => {
    console.error('Redis error: ', err);
});

export async function findAll(name: string) {
    const startTime = Date.now();
    const reply = await client.hgetall(name);
    const obj: { [key: string]: PkgSize } = {};
    for (let version in reply) {
        const payload: PkgSize = JSON.parse(reply[version] || '{}');
        payload.name = name;
        payload.version = version;
        obj[version] = payload;
    }
    console.log(`findAll (redis) ${Date.now() - startTime}ms`);
    return obj;
}

export async function findOne(name: string, version: string) {
    const startTime = Date.now();
    const reply = await client.hget(name, version);

    if (!reply) {
        return null;
    }

    let record: PkgSize = JSON.parse(reply);
    record.name = name;
    record.version = version;

    console.log(`findOne (redis) ${Date.now() - startTime}ms`);
    return record;
}

export async function insert(data: PkgSize) {
    const startTime = Date.now();
    const { name, version, ...payload } = data;
    const value = JSON.stringify(payload);
    const reply = await client.hset(name, version, value);
    console.log(`insert (redis) ${Date.now() - startTime}ms`);
    return reply;
}

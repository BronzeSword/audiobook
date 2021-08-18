import base from './base';
import dev from './config.dev';
import prod from './config.prod';
import test from './config.test';

let config = {};
if (process.env.NODE_ENV === 'production' && !process.env.ISUAT) {
    config = prod;
} else if (process.env.NODE_ENV === 'production' && process.env.ISUAT) {
    config = test;
} else {
    config = {
        ...dev,
        isDev: true,
    };
}

const configs = config;
export default Object.assign(base, configs);

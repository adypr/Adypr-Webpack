import '@babel/polyfill';
import 'normalize.css';
import '../styles/pets.scss';


async function start() {
    return await Promise.resolve('async!!!');
}

start().then(console.log);

class Util {
    static id = Date.now()
}

console.log('Util ID', Util.id)
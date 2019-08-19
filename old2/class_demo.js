const Person = require('./person');
console.log('hello from index.js');
const person1 = new Person('John Doe',30);
person1.greeting();

const Logger = require('./logger');
const logger = new Logger();
logger.on('message', (data) => console.log('Called Listener : ',data.id));
logger.log('hello world');
logger.log('hi');
logger.log('hello world');
const path = require('path');

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);
console.log(path.join(__dirname, 'sub_one', 'sub_two'));
var sortBy = require('lodash/collection/sortBy');

var users = [
    {name: 'Zack', age: 45},
    {name: 'Robby', age: 19},
    {name: 'Alice', age: 67}
];

var byAge = sortBy(users, 'age');

console.log(byAge);
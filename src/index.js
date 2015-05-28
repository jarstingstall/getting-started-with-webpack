var sortBy = require('lodash/collection/sortBy');

var users = [
    {name: 'Zack', age: 45},
    {name: 'Robby', age: 19},
    {name: 'Alice', age: 67},
    {name: 'Carl', age: 32}
];

var byName = sortBy(users, 'name');

console.log(byName);
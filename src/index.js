import sortBy from 'lodash/collection/sortBy';
import {users} from './users';
import {User} from './User';

sortBy(users, 'name')
    .map(function(user) {
        return new User(user.name, user.age);
    })
    .forEach(function(user) {
        console.log(user.display);
    });
"use strict";
class UserConstructor {
    constructor(ageOrName, age) {
        if (typeof ageOrName === 'string') {
            this.name = ageOrName;
        }
        else if (typeof ageOrName === 'number') {
            this.age = ageOrName;
        }
        if (typeof age === 'number') {
            this.age = age;
        }
    }
}
const userConctructor = new UserConstructor('ASd');
const userConctructor2 = new UserConstructor();
const userConctructor3 = new UserConstructor(33);
const userConctructor4 = new UserConstructor('asd', 33);
function run(distance) {
    if (typeof distance === 'number') {
        return 1;
    }
    else {
        return '';
    }
}
run(1);

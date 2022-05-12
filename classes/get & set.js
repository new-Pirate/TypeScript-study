"use strict";
class UserGS {
    set login(l) {
        this._login = 'user' + 1;
    }
    get login() {
        return 'sad';
    }
}
const userg = new UserGS();
userg.login = 'mylogin';
console.log(userg);

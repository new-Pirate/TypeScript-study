"use strict";
class Controller {
    handleLog(req) {
        console.log('start');
        this.handle(req);
        console.log('end');
    }
}
class UserCont extends Controller {
    handle(req) {
        console.log(req);
    }
}
const c = new UserCont();
c.handleLog('req');

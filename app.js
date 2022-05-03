"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 0] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 1] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 2] = "FAILED";
})(StatusCode || (StatusCode = {}));
const resEnum = {
    message: 'Платеж успешен',
    statusCode: StatusCode.SUCCESS
};
if (resEnum.statusCode === StatusCode.SUCCESS) {
}
function action(status) {
}
action(StatusCode.SUCCESS);
action(1);
function compure() {
    return 3;
}
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["USER"] = compure()] = "USER";
})(Roles || (Roles = {}));
const resEnum2 = Roles.ADMIN;

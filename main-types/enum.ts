enum StatusCode {
  SUCCESS,
  IN_PROCESS,
  FAILED
}

const resEnum = {
  message: 'Платеж успешен',
  statusCode: StatusCode.SUCCESS
}

if (resEnum.statusCode === StatusCode.SUCCESS) {

}

function action(status: StatusCode) {

}

action(StatusCode.SUCCESS);
action(1);

function compure() {
  return 3;
}

enum Roles {
  ADMIN = 1,
  USER = compure()
}

const enum RolesConst {
  ADMIN = 1,
  USER = 2
}

const resEnum2 = Roles.ADMIN;
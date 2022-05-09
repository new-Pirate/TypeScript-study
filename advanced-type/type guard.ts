interface UserTG {
  name: string;
  email: string;
  login: string;
}

const userTG: UserTG = {
  name: 'sad',
  email: 'asd',
  login: 'asd'
}

interface AdminTG {
  name: string;
  role: number;
}

function logIdG(id: string | number) {
  if (typeof id === 'string') {
    console.log(id);
  } else {
    console.log(id);
  }
}

function logIdTG(id: string | number) {
  if (isStr(id)) {
    console.log(id);
  } else {
    console.log(id);
  }
}

function isStr(x: string | number): x is string {
  return typeof x === 'string';
}

function isAdm(user: UserTG | AdminTG): user is AdminTG {
  return 'role' in user;
}

function isAdmAlternative(user: UserTG | AdminTG): user is AdminTG {
  return (user as AdminTG).role !== undefined;
}

function setRoleZero(user: UserTG | AdminTG) {
  if (isAdm(user)) {
    user.role = 0;
  } else {
    throw new Error("Пользователь не админ");
  }
}
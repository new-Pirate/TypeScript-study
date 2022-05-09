interface User {
  name: string,
  age: number,
  skills: string[],
  log: (id: number) => string
};

interface Role extends User {
  roleId: number;
};

interface UserRole extends User, Role {
  createdAt: Date;
};

type User2 = {
  name: string,
  age: number,
  skills: string[],
  log: (id: number) => string
};

let user: UserRole = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  roleId: 1,
  createdAt: new Date(),
  log(id) {
    return '';
  }
};
interface UserDic {
  [index: number]: User
};

type UserDic2 = {
  [index: number]: User
};
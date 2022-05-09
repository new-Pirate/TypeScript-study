let aType = 5;
let bType: string = aType.toString();

let cType: string = 'sdf';
let dType: number = parseInt(cType);

interface UserT {
  name: string;
  email: string;
  login: string;
}

const userT: UserT = {
  name: 'sad',
  email: 'asd',
  login: 'asd'
}

interface AdminT {
  name: string;
  role: number;
}

const adminT: AdminT = {
  ...userT,
  role: 1
}

function userToAdmin(userT: UserT): AdminT {
  return {
    name: user.name,
    role: 1
  }
}
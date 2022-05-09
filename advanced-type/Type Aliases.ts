type User = {
  name: string,
  age: number,
  skills: string[]
};

type Role = {
  id: number
};

type UserRole = User & Role;

let user: UserRole = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  id: 1
};
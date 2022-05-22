interface Role {
  name: string;
}

interface Perm {
  endDate: Date;
}

interface User {
  name: string;
  roles: Role[];
  perm: Perm;
}

const userA: User = {
  name: 'asd',
  roles: [],
  perm: {
    endDate: new Date(),
  }
}

const nameUser = user['name'];
let roleNames: 'roles' = 'roles';

type rolesType = User['roles'];
type rolesType2 = User[typeof roleNames];

type roleType = User['roles'][number];
type dateType = User['perm']['endDate'];

const roles = ['a', 's', 'v'] as const;
type roleTypes = typeof roles[number];

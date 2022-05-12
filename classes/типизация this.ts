class UserBuilder {
  name: string;

  setName(name: string): this {
    this.name = name;
    return this; 
  }

  isAdmin(): this is AdminBuilder  {
    return this instanceof AdminBuilder;
  }
}

class AdminBuilder extends UserBuilder {
  roles: string[];
}

const res = new UserBuilder().setName('Vas');
const res2 = new AdminBuilder().setName('Vas');

let userThis: UserBuilder | AdminBuilder = new UserBuilder();

if(userThis.isAdmin()) {
  console.log(userThis);
} else {
  console.log(userThis);
}
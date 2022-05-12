class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
}

const user = new User('ASd');
user.name = 'SAD';

class Admin {
  role: number;
}

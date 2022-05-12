class UserGS {
  _login: string;
  _pass: string;

  set login(l: string | number) {
    this._login = 'user' + 1;
  }

  get login() {
    return 'sad';
  }
}

const userg = new UserGS();
userg.login = 'mylogin';
console.log(userg);

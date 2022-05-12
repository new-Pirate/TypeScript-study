class UserService {
  static db: any;
  private static dbd: any;

  static getUser(id: number) {
    return UserService.db.findById(id);
  }

  create() {
    UserService.db;
  }
}

UserService.db = 3;
// UserService.dbd();
UserService.getUser(1);
const inst = new UserService();
inst.create();
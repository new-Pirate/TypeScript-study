abstract class Controller {
  abstract handle(req: any): void;

  handleLog(req: any) {
    console.log('start');
    this.handle(req);
    console.log('end');
  }
}

class UserCont extends Controller {
  handle(req: any): void {
    console.log(req);
  }
}


const c = new UserCont();
c.handleLog('req');
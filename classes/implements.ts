interface ILogger {
  log(...args): void;
  err(...args): void;
}

class Logger implements ILogger {
  log(...args: any[]): void {
    console.log(...args);
  }
  async err(...args: any[]): Promise<void> {
    console.log(...args);
  }
}

interface IPayable {
  pay(payId: number): void;
  prIce?: number;
}

interface IDelete {
  delete(): void;
}

class UserI implements IPayable, IDelete {
  delete(): void {
    throw new Error("error");
    
  }
  pay(payId: string | number): void {

  }
}
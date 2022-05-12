abstract class Log {
  abstract log(message: string): void;

  printDate(date: Date) {
    this.log(date.toString());
  }
}

class PrintLog extends Log {
  log(message: string): void {
    console.log(message);
  }

  logDate(message: string) {
    this.printDate(new Date());
    this.log(message);
  }
}

const dd = new PrintLog();
dd.logDate('sadsa');

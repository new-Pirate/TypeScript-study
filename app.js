"use strict";
class Log {
    printDate(date) {
        this.log(date.toString());
    }
}
class PrintLog extends Log {
    log(message) {
        console.log(message);
    }
    logDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
const dd = new PrintLog();
dd.logDate('sadsa');

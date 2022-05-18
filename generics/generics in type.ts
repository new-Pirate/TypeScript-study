function logMiddlewareType<T>(data: T): T {
  console.log(data);
  return data;
}
const split: <T>(data: Array<T>) => Array<T> = logMiddlewareType;

interface ILogLine<T> {
  timeStamp: Date;
  data: T;
}

type LogLineType <T> = {
  timeStamp: Date;
  data: T;
}

const logLine: ILogLine<{a: number}> = {
  timeStamp: new Date(),
  data: {
    a: 1
  }
}
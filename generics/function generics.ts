function logMiddleware<T>(data: T): T {
  console.log(data);
  return data;
}

const res = logMiddleware(10);

function splitHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2;
  return data.splice(0, 1);
}
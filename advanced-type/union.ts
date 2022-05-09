function logId(id: string | number | boolean) {
  if (typeof id === 'string') {
    console.log(id);
  } else if (typeof id === 'number') {
    console.log(id);
  } else {
    console.log(id);
  }
}

function logErr(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err);
  } else {
    console.log(err);
  }
}

function logObj(obj: { a: number } | { b: number }) {
  if ('a' in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

function logIds(a: string | number, b: string | number) {
  if (a = b) {
    console.log(a);
  } else {
    console.log(a);
  }
}
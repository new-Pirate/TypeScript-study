function generateErr(mes: string): never {
  throw new Error(mes);
}

function dumpErr(): never {
  while (true) {}
}

function rec(): never {
  rec();
}
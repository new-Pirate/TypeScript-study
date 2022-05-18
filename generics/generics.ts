const num: Array<number> = [1, 2, 3];

async function test() {
  const a = await new Promise<number>((resolve, reject) => {
    resolve(1);
  });
}

const checck: Record<string, boolean> = {
  drive: true,
  kpp: false,
}
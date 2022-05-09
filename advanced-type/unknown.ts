let input: unknown;

input = 3;
input = [1, 2];

function run(i: unknown) {
  if (typeof i === 'number') {
    i++;
  } else {
    i
  }
}

run(input);

async function getData() {
  try {
    await fetch('');
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
}

async function getDataForce() {
  try {
    await fetch('');
  } catch (err) {
    const e = err as Error;
    console.log(e.message);
  }
}
let strNum: string | number = 5;

if (Math.random() > 0.5) {
  strNum = 5;
} else {
  strNum = 'srt';
}

if (typeof strNum === 'string') {
  console.log(strNum);
} else {
  console.log(strNum);
};

let strNum2: typeof strNum;

const userT = {
  name: 'Vas',
}

type keyOfUser = keyof typeof userT;

enum Dir {
  Up,
  Down
}

type d = keyof typeof Dir;
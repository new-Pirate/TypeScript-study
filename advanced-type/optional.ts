interface UserOp {
  login: string;
  pass?: string;
}

const userOp: UserOp = {
  login: 'log'
}

function multiply(first: number, second?: number): number {
  if (!second) {
    return first * first;
  }
  return first * second;
}

multiply(5);

interface UserOpPro {
  login: string;
  pass?: {
    type: 'primary' | 'secondary'
  };
}

function testPass(user: UserOpPro) {
  const t = user.pass?.type;
}

function testЩз(param?: string) {
  const t = param ?? multiply(5);
}
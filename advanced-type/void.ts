function logIdVoid(id: string | number): void {
  console.log(id);
}

const a = logIdVoid(1);

function multiVoid(f: number, s?: number) {
  if (!s) {
    return f * f;
  }
}

type voidFunc = () => void;

const fv1: voidFunc = () => {

};

const fv2: voidFunc = () => {
  return true;
};

const b = fv2();

const arrSkills = ['Front', 'Back'];

const userObj = {
  s: ['s']
}

arrSkills.forEach((skill) => user.skills.push(skill));
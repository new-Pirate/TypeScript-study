class UserConstructor {
  name: string;
  age: number;

  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(name: string, age: number);
  constructor(ageOrName?: string | number, age?: number) {
    if (typeof ageOrName === 'string') {
      this.name = ageOrName;
    } else if (typeof ageOrName === 'number') {
      this.age = ageOrName;
    }

    if (typeof age === 'number') {
      this.age = age;
    }
  }
}

const userConctructor = new UserConstructor('ASd');
const userConctructor2 = new UserConstructor();
const userConctructor3 = new UserConstructor(33);
const userConctructor4 = new UserConstructor('asd', 33);


//перегрузка функций
function run(distance: string): string;
function run(distance: number): number;
function run(distance: string | number): string | number {
  if (typeof distance === 'number') {
    return 1
  } else {
    return '';
  }
}

run(1);
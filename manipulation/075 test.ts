interface IForm {
  name: string;
  password: string;
}

const form: IForm = {
  name: 'vas',
  password: '123',
}

const formVali: Validation<IForm> = {
  name: { isValid: true },
  password: { isValid: false, errorMessage: 'Error' }
}

type Validation<T> = {
  [K in keyof T]: {
    isValid: true;
  } | {
    isValid: false;
    errorMessage: string;
  }
}
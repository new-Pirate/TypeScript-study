class Resp<D, E> {
  data?: D;
  error?: E;

  constructor(data?: D, error?: E) {
    if (data) {
      this.data = data;
    }

    if (error) {
      this.error = error;
    }
  }
}

const resc = new Resp<string, number>('data');
resc.data;
class HTTPResp<F> extends Resp<string, number> {
  code: F;

  setCode(code: F) {
    this.code = code;
  }
}

const resc2 = new HTTPResp();
resc2.data;
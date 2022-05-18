type Constructor = new (...arg: any[]) => {};
type GConstructor<T = {}> = new (...arg: any[]) => T;

class List {
  constructor(public items: string[]) { }
}

class Accrodion {
  isOpen: boolean;
}

type ListType = GConstructor<List>;
type AccrodionType = GConstructor<Accrodion>;

class ExtListClass extends List {
  first() {
    return this.items[0];
  }
};

function ExtList<TBase extends ListType & AccrodionType>(Base: TBase) {
  return class ExtList extends Base {
    first() {
      return this.items[0];
    }
  }
}

class AccordionList {
  isOpen: boolean;
  constructor(public items: string[]) { }
}

const list = ExtList(AccordionList);
const result = new list(['first','second']);
result.first();

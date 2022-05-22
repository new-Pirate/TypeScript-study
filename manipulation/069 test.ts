interface Data {
  group: number;
  name: string;
};

const data: Data[] = [
  { group: 1, name: 'a' },
	{ group: 1, name: 'b' },
	{ group: 2, name: 'c' },
];

interface IGroupe<T> {
  [key: string]: T[];
}

function group<T extends Record<string, any>>(array: T[], key: keyof T): IGroupe<T> {
  return array.reduce((map: IGroupe<T>, item) => {
    const itemKey = item[key];
    let curEl = map[itemKey];
    if (Array.isArray(curEl)) {
      curEl.push(item);
    } else {
      curEl = [item];
    }
    map[itemKey] = curEl;
    return map;
  }, {});
}

const res = group<Data>(data, 'group');

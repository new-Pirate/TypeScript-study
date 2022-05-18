function toString<T>(data: T): string | undefined {
  if (Array.isArray(data)) {
    return data.toString();
  }

  switch (typeof data) {
    case 'string':
      return data;
    case 'number':
    case 'symbol':
    case 'boolean':
    case 'bigint':
    case 'number':
    case 'function':
      return data.toString();
    case 'object':
      return JSON.stringify(data);
    default:
      return undefined;
  }
}

toString(3);
toString(true);
toString([1, 2]);
toString({ a: 1 });

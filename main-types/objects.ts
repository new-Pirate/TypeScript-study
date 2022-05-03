function getFullNamesObj(userEntyty: { firstname: string, surname: string }): string {
  return `${userEntyty.firstname} ${userEntyty.surname}`;
}

const userObj = {
  firstname: 'kek',
  surname: 'shrek',
  city: 'far far away',
  age: 33,
  skills: {
    dev: true,
    front: true
  }
}

console.log(getFullNamesObj(userObj));

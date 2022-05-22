interface HTTPResp<T extends 'success' | 'failed'> {
  code: number;
  data: T extends 'success' ? string : Error;
}

const suc: HTTPResp<'success'> = {
  code: 200,
  data: 'done',
}

const err: HTTPResp<'failed'> = {
  code: 200,
  data: new Error(),
}

class User {
  id: number;
  name: string;
}

class UserPers extends User {
  daId: string;
}

function getUser(id:number ): User
function getUser(dbId:string ): UserPers
function getUser(dbIdOrId:string | number): User | UserPers {
  if (typeof dbIdOrId === 'number') {
    return new User();
  } else {
    return new UserPers();
  }
}

type UOUP<T extends string | number> = T extends number ? User : UserPers;

function getUser2<T extends string | number>(id: T ): UOUP<T> {
  if (typeof id === 'number') {
    return new User() as UOUP<T>;
  } else {
    return new UserPers();
  }
}

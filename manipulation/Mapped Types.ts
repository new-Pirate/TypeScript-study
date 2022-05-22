type Modiffier = 'read' | 'update' | 'create';

type UserRole = {
  customers?: Modiffier,
  project?: Modiffier,
  adminPanel?: Modiffier,
}

type ModiffierToAccess<Type> = {
  +readonly [Property in keyof Type as Exclude<`canAccess${string & Property}`, 'canAccessadminPanel'>]-?: boolean
}

type UserAccess2 = ModiffierToAccess<UserRole>;

type UserAccess1 = {
  customers?: boolean,
  project?: boolean,
  adminPanel?: boolean,
}
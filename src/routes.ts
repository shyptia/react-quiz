type Route = 'language' | 'gender' | 'age' | 'favorite-topics' | 'email';

export const routes: Route[] = ['language', 'gender', 'age', 'favorite-topics', 'email'];

export const routesPathnames: Record<Route, string> = {
  language: '/language',
  gender: '/gender',
  age: '/age',
  "favorite-topics": '/favorite-topics',
  email: '/email',
}

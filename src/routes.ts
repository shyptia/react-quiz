type Route = 'language' | 'gender' | 'age' | 'hate-in-books' | 'favorite-topics' | 'email';

export const routes: Route[] = ['language', 'gender', 'age', 'hate-in-books', 'favorite-topics', 'email'];

export const routesPathnames: Record<Route, string> = {
  language: '/language',
  gender: '/gender',
  age: '/age',
  'hate-in-books': '/hate-in-books',
  "favorite-topics": '/favorite-topics',
  email: '/email',
}

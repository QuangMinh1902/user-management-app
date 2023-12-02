import { rest } from 'msw';

const handlers = [
  rest.get('http://localhost:3030/users', (req, res, ctx) => {
    // Simulate a successful GET request
    return res(ctx.status(200), ctx.json([
      // Define your mocked users data here
      { id: 1, name: 'an', email: 'antran@gmail.com' },
      { id: 2, name: 'jamili add', email: 'jamiliadd@example.com' },
      { id: 3, name: 'alex', email: 'jalex@example.com' },
      { id: 4, name: 'heya', email: 'jheya@example.com' },
      { id: 5, name: 'queen', email: 'queeen@example.com' },
     
    ]));
  }),

  rest.post('http://localhost:3030/users', (req, res, ctx) => {
    // Simulate a successful POST request
    return res(ctx.status(201), ctx.json({ message: 'User created successfully' }));
  }),

  rest.put('http://localhost:3030/users/:id', (req, res, ctx) => {
    // Simulate a successful PUT request
    return res(ctx.status(200), ctx.json({ message: 'User updated successfully' }));
  }),

  rest.delete('http://localhost:3030/users/:id', (req, res, ctx) => {
    // Simulate a successful DELETE request
    return res(ctx.status(204));
  }),
];

export { handlers };

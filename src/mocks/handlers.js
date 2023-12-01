// src/mocks/handlers.js
import { rest } from 'msw';

const handlers = [
  rest.get('http://localhost:3030/users', (req, res, ctx) => {
    // Simulate a successful GET request
    return res(ctx.status(200), ctx.json([
      // Define your mocked users data here
      { id: 1, name: 'Mocked User 1', email: 'user1@example.com' },
      { id: 2, name: 'Mocked User 2', email: 'user2@example.com' },
      // ... more mocked data
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

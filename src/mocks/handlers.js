import { http, HttpResponse } from "msw";
import { json } from "react-router-dom";

let users = [
  { id: 1, name: "an", email: "antran@gmail.com" },
  { id: 2, name: "jamili add", email: "jamiliadd@example.com" },
  { id: 3, name: "alex", email: "jalex@example.com" },
  { id: 4, name: "heya", email: "jheya@example.com" },
  { id: 5, name: "queen", email: "queeen@example.com" },
];

const handlers = [
  http.get("http://localhost:3030/users", ({ request }) => {
    return HttpResponse.json(users);
  }),

  http.post("http://localhost:3030/users", async ({ request }) => {
    // console.log(await request.json());
    const newUser = await request.json();
    const id = users.length + 1;

    users.push({ ...newUser, id });
    return HttpResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  }),

  http.put("http://localhost:3030/users/:id", async ({ request, params }) => {
    // Simulate a successful PUT request
    console.log({ params });
    console.log({ users });
    const newUser = await request.json();
    const id = parseInt(params["id"]);
    const index = users.findIndex((user) => user.id === id);
    users[index] = { ...newUser, id };
    console.log(newUser, id, index);

    return HttpResponse.json(
      { message: "User updated successfully" },
      { status: 201 }
    );
  }),

  http.delete("http://localhost:3030/users/:id", ({ request, params }) => {
    // Simulate a successful DELETE request
    // console.log(request);
    console.log({ params });
    console.log({ users });
    const id = parseInt(params["id"]);
    const index = users.findIndex((user) => user.id === id);
    users.splice(index, 1);

    console.log({users, id, index});

    return HttpResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  }),
];

export { handlers };


# 🚀 GraphQL Auth App

A simple Register + Login demo using GraphQL, built with:

- Frontend: React + Apollo Client
- Backend: Node.js + Express + Apollo Server
- Database: MongoDB (Mongoose)
- Auth: JWT (JSON Web Tokens)

This repository demonstrates how to implement user authentication (register + login) using a GraphQL API.

---

## 📦 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Apollo Client |
| Backend | Node.js, Express, Apollo Server |
| Database | MongoDB (Mongoose) |
| Authentication | JWT |
| API | GraphQL |

---

## 🗂️ Folder Structure

```
graphql-auth-app/
│
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── schema.js
│   ├── resolvers.js
│   ├── config.js
│   ├── server.js
│   └── package.json
│
└── frontend/
        ├── src/
        │   ├── apolloClient.js
        │   ├── App.js
        │   ├── graphql/
        │   │   ├── mutations.js
        │   │   └── queries.js
        │   └── components/
        │       ├── Register.js
        │       └── Login.js
        ├── package.json
        └── README.md
```

---

## ⚙️ Backend Setup

1. Go to the backend folder

```bash
cd backend
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file (copy from `.env.example`) and set these at minimum:

```ini
MONGO_URI=mongodb://localhost:27017/graphql-auth
JWT_SECRET=supersecretkey
PORT=4000
```

4. Make sure MongoDB is running locally (example):

```bash
# start mongod (varies by OS and install)
mongod
```

5. Start the backend server

```bash
node server.js
```

Backend GraphQL endpoint:

```
http://localhost:4000/graphql
```

---

## 💻 Frontend Setup

1. Go to the frontend folder

```bash
cd frontend
```

2. Install dependencies

```bash
npm install
```

3. (Optional) Create a `.env` file (copy from `.env.example`) and set the GraphQL endpoint:

```env
REACT_APP_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```

4. Start the React app

```bash
npm start
```

Frontend app:

```
http://localhost:3000
```

---

## 🔗 GraphQL API Examples

Register mutation

```graphql
mutation {
    register(name: "John", email: "john@example.com", password: "123456") {
        id
        name
        email
        token
    }
}
```

Login mutation

```graphql
mutation {
    login(email: "john@example.com", password: "123456") {
        id
        name
        email
        token
    }
}
```

Authenticated query (requires Authorization header)

```graphql
{
    me {
        id
        name
        email
    }
}
```

Add header in GraphQL Playground / Insomnia / Postman:

```json
{
    "Authorization": "Bearer <your-token>"
}
```

---

## 🧩 Apollo Client Import Note

Apollo Client v4 supports root-level imports like:

```js
import { ApolloProvider, useMutation, useQuery } from "@apollo/client";
```

However, depending on the exact package version and build tool, some environments may access the React-specific entrypoint. If you see errors like `export 'useMutation' was not found in '@apollo/client'`, use the React entrypoint instead:

```js
import { useMutation } from "@apollo/client/react";
```

Use the root-level imports when they work; fall back to `@apollo/client/react` if your build reports missing exports.

---

## 🧰 Common Commands

Backend

```bash
npm start        # runs backend server (or node server.js)
```

Frontend

```bash
npm start        # starts React dev server
npm run build    # builds production bundle
```

---

## 🛠 Troubleshooting

| Problem | Cause | Solution |
|---|---|---|
| ApolloProvider or useMutation not found | Wrong import path | Use `import { ApolloProvider, useMutation } from "@apollo/client"` or fallback to `@apollo/client/react` |
| Mongo connection error | MongoDB not running or wrong URI | Start MongoDB and verify `MONGO_URI` in `.env` |
| JWT error | Missing or expired token | Re-login to get a new token; check token handling in resolvers/middleware |
| CORS error | Server missing headers | Ensure `app.use(cors())` is configured in `server.js` and that frontend origin is allowed |

---

## 🧾 .env.example (Backend)

```ini
# MongoDB Connection
MONGO_URI=mongodb://localhost:27017/graphql-auth

# JWT Secret Key
JWT_SECRET=supersecretkey

# Server Port
PORT=4000
```

## 🧾 .env.example (Frontend)

```env
# GraphQL endpoint
REACT_APP_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```

## 🧹 .gitignore

```
# Node modules
node_modules/

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
backend/.env
frontend/.env

# Build & Coverage
build/
dist/
coverage/

# Logs
logs/
*.log

# OS & IDE
.DS_Store
Thumbs.db
.vscode/
.idea/
*.swp
```

## 📜 License

This project is open-source and free to use for educational or personal learning purposes.

## ❤️ Author

Created by `standardhub`

If this helped you learn GraphQL, consider starring the project on GitHub!


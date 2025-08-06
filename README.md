# 📝 Todo App

A **dockerized full-stack Todo application** built with:

- 🟢 **Node.js** (Express) as the backend
- 🗃️ **PostgreSQL** for the database
- 📦 **Prisma ORM** for database access
- 🔐 **JWT authentication** for securing APIs
- 🐳 **Docker** for containerized development

---

## 🚀 Features

- User registration and login (JWT-based)
- Secure password hashing with `bcryptjs`
- Create, read, update, and delete (CRUD) todos
- Persistent PostgreSQL database
- Prisma-based schema and migration system
- Dockerized for easy deployment and development

---

## 📦 Tech Stack

| Layer        | Tech                  |
|--------------|-----------------------|
| Runtime      | Node.js 22            |
| Server       | Express (v5)          |
| ORM          | Prisma                |
| Auth         | JWT + bcryptjs        |
| Database     | PostgreSQL (13-alpine)|
| Container    | Docker / Docker Compose|

---

## 🛠️ Getting Started

### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🧪 Quick Start

```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
docker compose up --build
````

Once started:

* Backend API: [http://localhost:8000](http://localhost:8000)
* PostgreSQL DB: `localhost:5432`, user: `postgres`, password: `postgres`

---

## ⚙️ Environment Variables

Located in `.env` (sample below):

```env
DATABASE_URL=postgresql://postgres:postgres@db:5432/todoapp
JWT_SECRET=white_bear_eats_fish
NODE_ENV=development
PORT=8000
```

---

## 🔃 Prisma Commands

```bash
# Create a migration
npx prisma migrate dev --name init

# Push schema changes without migration
npx prisma db push

# Open Prisma Studio (GUI)
npx prisma studio
```

---

## 📁 Project Structure

```
todo-app/
├── prisma/
│   └── schema.prisma         # Prisma DB schema
├── src/
│   ├── server.js             # App entry point
│   ├── routes/               # Express routes
│   ├── controllers/          # Logic handlers
│   ├── middleware/           # Auth middleware, etc.
│   └── models/               # Prisma models
├── Dockerfile
├── docker-compose.yml
├── package.json
└── .env
```

---

## 🐳 Docker Overview

* `app` service: Node.js server
* `db` service: PostgreSQL database
* Persistent volume: `postgres-data`

---

## ✅ Todo (Planned Improvements)

* [ ] Frontend (React/Vue)
* [ ] Todo priority and due dates
* [ ] User roles (admin, user)
* [ ] Unit tests and CI setup

---

## 📄 License

This project is licensed under the **ISC License**.

---

## ✨ Author

Made with ❤️ by \[Max Cherya]

---
# MERN Hackathon Starter

A simple deployment-ready MERN starter built for branch / merge / deployment practice.

## Stack
- React + Vite
- React Router
- Axios
- Node.js
- Express
- MongoDB + Mongoose

## Sample Feature
A simple Task Manager with:
- Add task
- View tasks
- Mark complete/incomplete
- Delete task
- Validation
- Persistent MongoDB storage

---

## 1. Install dependencies

### Backend
```bash
cd server
npm install
```

Create `server/.env` from `.env.example`.

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run:

```bash
npm run dev
```

Backend: http://localhost:5000

### Frontend
Open another terminal:

```bash
cd client
npm install
```

Create `client/.env` from `.env.example`.

```env
VITE_API_URL=http://localhost:5000/api
```

Run:

```bash
npm run dev
```

Frontend: http://localhost:5173

---

# Git Practice

## Initialize repository

From the project root:

```bash
git init
git add .
git commit -m "Initial MERN starter setup"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Simulate four team members

Create branches:

```bash
git checkout -b feature/add-task
```

Make a change, then:

```bash
git add .
git commit -m "Improve add task form"
git push -u origin feature/add-task
```

Return to main:

```bash
git checkout main
git pull origin main
```

Create another branch:

```bash
git checkout -b feature/task-filter
```

Later merge:

```bash
git checkout main
git pull origin main
git merge feature/add-task
git push origin main
```

Or create Pull Requests on GitHub instead.

## Suggested branches for practice

- `feature/add-task`
- `feature/task-filter`
- `feature/dashboard`
- `feature/ui-improvements`

Try deliberately making two branches modify `App.jsx` so you can practice resolving a merge conflict.

---

# API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

---

# Deployment

## Backend: Render

Create a new Web Service using the GitHub repository.

Root directory:

```text
server
```

Build command:

```bash
npm install
```

Start command:

```bash
npm start
```

Environment variable:

```text
MONGO_URI=your_mongodb_atlas_uri
```

The application automatically uses Render's `PORT` environment variable.

After deployment, test:

```text
https://YOUR-BACKEND.onrender.com/
https://YOUR-BACKEND.onrender.com/api/tasks
```

---

## Frontend: Vercel

Create a new Vercel project from the same GitHub repository.

Root directory:

```text
client
```

Framework:

```text
Vite
```

Environment variable:

```text
VITE_API_URL=https://YOUR-BACKEND.onrender.com/api
```

Deploy.

---

# Hackathon Practice Challenge

Once this starter works, pretend the actual question is:

> Build a Student Help Desk Management System.

Without starting a new project:

1. Rename Task to Ticket.
2. Add fields:
   - title
   - description
   - category
   - priority
   - status
3. Add search or filtering.
4. Add dashboard statistics.
5. Split work across four feature branches.
6. Merge everything.
7. Deploy.

That closely simulates a real mini-hackathon workflow.

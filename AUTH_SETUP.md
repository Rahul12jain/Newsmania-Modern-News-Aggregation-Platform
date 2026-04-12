# Auth Setup

The backend includes MongoDB Atlas-backed JWT signup and signin endpoints.

1. Install backend dependencies:

```bash
cd backend
npm install
```

2. Create `backend/.env` from `backend/.env.example` and set:

```bash
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/newsmania?retryWrites=true&w=majority
JWT_SECRET=replace-with-a-long-random-secret
JWT_EXPIRES_IN=7d
FRONTEND_ORIGIN=http://localhost:5173
```

Use your MongoDB Atlas database user's username and password. If your password
contains special characters, URL-encode it before putting it in `MONGO_URI`.

3. Start the API:

```bash
cd backend
npm run start
```

4. Start the React app in another terminal:

```bash
cd frontend
npm run dev
```

5. Open the auth pages:

- `http://localhost:5173/login`
- `http://localhost:5173/signup`

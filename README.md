# Online Shop

Online store with the ability to create products by categories, leave ratings and reviews, user authentication (JWT, OAuth Google), and features for adding items to favorites and the shopping cart.

## Used technologies
### Backend
- Nest
- PostgreSQL
- Prisma
- passport
### Frontend
- Next
- TanStack Query
- Redux
- Axios
- Typescript
- Tailwind CSS
- ShadCN UI

## How to run

To run the project, you need to create environment files for both backend and frontend.

## Backend `.env` file

Create a `.env` file in your backend folder with the following content:

```env
DATABASE_URL="postgresql://test:test@localhost:5432/idp?schema=public"

JWT_SECRET=test

GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

CLIENT_URL=
SERVER_URL=
SERVER_DOMAIN=
```

Create a .env file in your frontend folder with the following content:

```env
APP_ENV=development
APP_DOMAIN=localhost

APP_URL=http://localhost:3000
SERVER_URL=http://localhost:5000
```
Make sure to run PostgreSQL on the database URL specified in the backend .env file (DATABASE_URL).

In the project directory, you need install dependencies: `npm i`, than you can run: `npm run dev` for backend, and `npm start` for frontend.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

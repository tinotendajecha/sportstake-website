# Authentication Setup Instructions

## Prerequisites

The authentication system has been fully implemented. To complete the setup, follow these steps:

## 1. Environment Setup

Create a `.env` file in the root directory with the following content:

```
DATABASE_URL="file:./prisma/dev.db"
```

## 2. Install Dependencies (if not already done)

```bash
npm install prisma @prisma/client bcryptjs
```

## 3. Generate Prisma Client

```bash
npx prisma generate
```

## 4. Run Database Migration

```bash
npx prisma migrate dev --name init
```

This will:
- Create the SQLite database file at `prisma/dev.db`
- Create the `users` table with the User model schema

## 5. Start the Development Server

```bash
npm run dev
```

## Authentication Features

### Backend
- ✅ Prisma ORM with SQLite database
- ✅ User model with id, email, password (hashed), createdAt
- ✅ API routes:
  - `POST /api/auth/signup` - User registration
  - `POST /api/auth/login` - User authentication
- ✅ bcrypt password hashing
- ✅ Generic error messages to prevent email enumeration

### Frontend
- ✅ Authentication context using React Context API
- ✅ localStorage-based session management
- ✅ Login page (`/login`) with themed styling
- ✅ Signup page (`/signup`) with themed styling
- ✅ Navigation bar shows:
  - Login/Sign Up links when not authenticated
  - User email with logout dropdown when authenticated
- ✅ Protected service buttons show "Login to start assessment" when not authenticated
- ✅ Automatic redirect after login/signup

## Color Scheme Used

- Cyan Blue: `#00B2CC`
- Neon Orange: `#FF5E00`
- Yellow Accent: `#FFD500`
- Black: Default dark background

## Usage

1. **Sign Up**: Users can create an account at `/signup`
2. **Sign In**: Users can log in at `/login`
3. **Protected Routes**: Service buttons on `/services` require authentication
4. **Session**: Auth state persists in localStorage
5. **Logout**: Click on user email in navbar → Logout

## File Structure

```
prisma/
  schema.prisma          # User model definition
lib/
  prisma.ts              # Prisma client singleton
  auth.ts                # Password hashing utilities
app/
  api/
    auth/
      signup/route.ts    # Signup API endpoint
      login/route.ts     # Login API endpoint
  login/
    page.tsx             # Login page
  signup/
    page.tsx             # Signup page
contexts/
  AuthContext.tsx        # Auth context provider
components/
  Layout.tsx             # Layout with auth navigation
```

## Notes

- Database is SQLite (file-based, perfect for simple deployments)
- Passwords are hashed with bcrypt (10 salt rounds)
- No OAuth - native email/password authentication only
- Generic error messages prevent email enumeration attacks
- Route protection handled through conditional rendering and redirects


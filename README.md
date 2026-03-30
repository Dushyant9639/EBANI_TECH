# Role Based Dashboard Application

This project is a role-based dashboard system built using Node.js,
Express.js, and MongoDB. It implements authentication, role-based access
control (RBAC), and CRUD operations for different user roles.

## Roles

-   Super Admin
-   Admin
-   User

Each role has different permissions within the system.

------------------------------------------------------------------------

# Features

## Authentication

-   Login using email and password
-   Passwords stored securely using bcrypt hashing
-   JWT based authentication
-   Role-based redirection after login

------------------------------------------------------------------------

# Roles and Permissions

## Super Admin

Super Admin has full access to manage the system.

Capabilities: - Create Admin - View Admins - Update Admin - Delete
Admin - Create Users under any Admin

Fields for Admin/User: - Name - Email - Phone - Password

## Admin

Admin can manage only the users created by them.

Capabilities: - Create User - View their Users - Update User - Delete
User

Restrictions: - Cannot access other Admins - Cannot access users created
by other Admins

## User

Users can access a personal dashboard.

Capabilities: - Login to the system - Perform CRUD operations on Tasks

Example fields: - Title - Description

------------------------------------------------------------------------

# Tech Stack

Backend: - Node.js - Express.js

Database: - MongoDB - Mongoose

Authentication: - JWT (JSON Web Token) - bcrypt

API Testing: - Postman

------------------------------------------------------------------------

# Setup Instructions

## 1 Install Dependencies

npm install

## 2 Create Environment Variables

Create a .env file in the root directory:

PORT=5000 MONGO_URI=mongodb://localhost:27017/roleDashboard
JWT_SECRET=secretkey

## 3 Run MongoDB

Ensure MongoDB is running locally or use MongoDB Atlas.

## 4 Create Super Admin

Run the seed script:

node seedSuperAdmin.js

Default credentials:

Email: super@admin.com Password: 123456 Role: superadmin

## 5 Start the Server

npm run dev

Server will run on:

http://localhost:5000

------------------------------------------------------------------------

# API Endpoints

## Authentication

POST /api/auth/login

## Admin Management (Super Admin Only)

POST /api/admins GET /api/admins PUT /api/admins/:id DELETE
/api/admins/:id

## User Management

POST /api/users GET /api/users PUT /api/users/:id DELETE /api/users/:id

Admins can manage only the users created by them.

## Task CRUD (User Dashboard)

POST /api/tasks GET /api/tasks PUT /api/tasks/:id DELETE /api/tasks/:id

------------------------------------------------------------------------

# RBAC Implementation

Role Based Access Control is implemented using middleware.

1.  Authentication middleware verifies JWT tokens.
2.  Role middleware checks user permissions.
3.  APIs are protected based on role access.

Role hierarchy:

Super Admin ↓ Admin ↓ User

Super Admin manages Admins, Admins manage Users, and Users manage their
own tasks.

------------------------------------------------------------------------


# User Management System - Express JS Backend Structure

This project implements a perfect Express JS backend folder structure for a User Management System, built as part of the MERN Stack course (Module 15 Assignment).

## 📁 Project Structure

```
module15_assignment/
├── config/
│   └── config.js              # Application port/env configuration
├── controllers/
│   └── userController.js      # Controller logic for all 20 actions
├── middlewares/
│   ├── logger.js              # Global request logger middleware
│   └── authMiddleware.js      # Placeholder authentication gatekeeper
├── models/
│   └── userModel.js           # Placeholder user database schema/model
├── routes/
│   └── api.js                 # Unified API routing definition
├── app.js                     # Express app initializations
├── server.js                  # Main server listener entry point
├── package.json               # NPM packages and nodemon configuration
└── .gitignore                 # Files excluded from source control
```

---

## ⚡ API Endpoint Reference

All 20 endpoints are defined in `routes/api.js` and handled by functions inside `controllers/userController.js`.

| #  | Endpoint | HTTP Method | Handler Function | Success Message |
|----|----------|-------------|------------------|-----------------|
| 1  | `/create-user` | `POST` | `createUser` | `"User created successfully"` |
| 2  | `/read-user` | `GET` | `readUser` | `"User read successfully"` |
| 3  | `/update-user` | `PUT` | `updateUser` | `"User updated successfully"` |
| 4  | `/delete-user` | `DELETE` | `deleteUser` | `"User deleted successfully"` |
| 5  | `/all-users` | `GET` | `getAllUsers` | `"All users fetched successfully"` |
| 6  | `/user/:id` | `GET` | `getUserById` | `"User fetched by ID"` |
| 7  | `/login` | `POST` | `loginUser` | `"User login successful"` |
| 8  | `/logout` | `POST` | `logoutUser` | `"User logout successful"` |
| 9  | `/change-password` | `PUT` | `changePassword` | `"Password changed successfully"` |
| 10 | `/update-profile` | `PUT` | `updateProfile` | `"User profile updated successfully"` |
| 11 | `/make-admin/:id` | `PUT` | `makeAdmin` | `"User made admin successfully"` |
| 12 | `/remove-admin/:id` | `PUT` | `removeAdmin` | `"Admin role removed successfully"` |
| 13 | `/search` | `GET` | `searchUsers` | `"User search completed successfully"` |
| 14 | `/filter` | `GET` | `filterUsers` | `"User filter completed successfully"` |
| 15 | `/block-user/:id` | `PATCH` | `blockUser` | `"User blocked successfully"` |
| 16 | `/unblock-user/:id` | `PATCH` | `unblockUser` | `"User unblocked successfully"` |
| 17 | `/verify-email` | `POST` | `verifyEmail` | `"Email verified successfully"` |
| 18 | `/resend-verification` | `POST` | `resendVerification` | `"Verification email resent"` |
| 19 | `/upload-profile-picture`| `POST` | `uploadProfilePicture`| `"Profile picture uploaded successfully"`|
| 20 | `/delete-account` | `DELETE` | `deleteAccount` | `"Account deleted successfully"` |

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### 2. Run in Development Mode
Start the application with live-reloading (using `nodemon`):
```bash
npm run dev
```

The server will listen at `http://localhost:3000`.

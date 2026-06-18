const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// 1. Create Route
router.post("/create-user", userController.createUser);

// 2. Read Route
router.get("/read-user", userController.readUser);

// 3. Update Route
router.put("/update-user", userController.updateUser);

// 4. Delete Route
router.delete("/delete-user", userController.deleteUser);

// 5. Get All Users
router.get("/all-users", userController.getAllUsers);

// 6. Get User by ID
router.get("/user/:id", userController.getUserById);

// 7. User Login
router.post("/login", userController.loginUser);

// 8. User Logout
router.post("/logout", userController.logoutUser);

// 9. Change Password
router.put("/change-password", userController.changePassword);

// 10. Update Profile
router.put("/update-profile", userController.updateProfile);

// 11. Make Admin
router.put("/make-admin/:id", userController.makeAdmin);

// 12. Remove Admin
router.put("/remove-admin/:id", userController.removeAdmin);

// 13. Search Users
router.get("/search", userController.searchUsers);

// 14. Filter Users
router.get("/filter", userController.filterUsers);

// 15. Block User
router.patch("/block-user/:id", userController.blockUser);

// 16. Unblock User
router.patch("/unblock-user/:id", userController.unblockUser);

// 17. Verify Email
router.post("/verify-email", userController.verifyEmail);

// 18. Resend Verification
router.post("/resend-verification", userController.resendVerification);

// 19. Upload Profile Picture
router.post("/upload-profile-picture", userController.uploadProfilePicture);

// 20. Delete Account
router.delete("/delete-account", userController.deleteAccount);

module.exports = router;

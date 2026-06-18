// Placeholder for User Schema / Model
// In a fully developed MERN stack app, you would define the user schema fields here:
// - name, email, password, role (e.g., 'Student', 'Admin'), isBlocked, isVerified, profilePicture, etc.

const dummyUserModel = {
  name: String,
  email: String,
  role: { type: String, default: "Student" },
  isBlocked: { type: Boolean, default: false }
};

module.exports = dummyUserModel;

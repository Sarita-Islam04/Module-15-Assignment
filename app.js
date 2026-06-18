const express = require("express");
const logger = require("./middlewares/logger");
const apiRouter = require("./routes/api");

const app = express();

// Standard parsed body middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom global logger middleware
app.use(logger);

// Mount API routes at the root level
app.use("/", apiRouter);

// Basic 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found"
  });
});

module.exports = app;

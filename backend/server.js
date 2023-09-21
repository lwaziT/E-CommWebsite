const app = require("./app");
const connectDatabase = require("./db/Database");

process.on("uncaughtException", (e) => {
  console.log(`Error: ${e.message}`);
  console.log(`Shutting down the server for handling uncaught exception`);
});

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

//Connect to db
connectDatabase();

//Create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

process.on("unhandledRejection", (e) => {
  console.log(`Shutting down the server for ${e.message}`);
  console.log(`Shutting down the server for unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});

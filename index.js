const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");

const app = require("./app");

//✅Connected to MongoDB Database
connectDB();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

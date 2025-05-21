const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//✅Routes
const reminderRoutes = require("./routes/reminder.routes");

//✅Using Routes
app.use("/api/reminder", reminderRoutes);

module.exports = app;

const express = require("express");
const { createReminder, getAllReminders, getSingleReminder } = require("../controllers/reminder.controller");
const router = express.Router();

router.post("/create-reminder", createReminder);
router.get("/get-all-reminders", getAllReminders);
router.get("/get-reminder/:id", getSingleReminder);


module.exports = router;

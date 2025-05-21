const Reminder = require("../models/reminder.model");
const { validationResult } = require("express-validator");


//✅Create Reminder
const createReminder = async (req, res) => {
    // ✅ express-validator errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
  
    const { date, time, message, remind_by } = req.body;
  
    // ✅ Date format validation
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[0-2])[-/](\d{4})$/;
    if (!dateRegex.test(date)) {
      return res.status(400).json({
        success: false,
        message: "Date must be in DD/MM/YYYY or DD-MM-YYYY format"
      });
    }
  
    // ✅ Time format validation
    const timeRegex = /^(0?[1-9]|1[0-2])(:[0-5][0-9])? ?([APap][Mm])?$/;
    if (!timeRegex.test(time)) {
      return res.status(400).json({
        success: false,
        message: "Time must be in 12-hour format (1-12), optionally with minutes and AM/PM"
      });
    }
  
    try {
      // ✅ Create reminder
      const newReminder = await Reminder.create({
        date,
        time,
        message,
        remind_by
      });
  
      return res.status(201).json({
        success: true,
        message: "Reminder Created Successfully",
        reminder: newReminder
      });
  
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }
  };
  
  //✅ Get All Reminders
const getAllReminders = async (req, res) => {
    try {
      const reminders = await Reminder.find();
      return res.status(200).json({
        success: true,
        reminders
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }
  };

  //✅ Get Single Reminder
const getSingleReminder = async (req, res) => {
    try {
      const reminder = await Reminder.findById(req.params.id);
      return res.status(200).json({
        success: true,
        reminder
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }
  };
module.exports = {
    createReminder,
    getAllReminders,
    getSingleReminder
}
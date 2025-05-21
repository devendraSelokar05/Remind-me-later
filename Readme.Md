# Remind-me-later 🕒

A simple backend API built with **Node.js** and **Express.js** for managing reminders with date, time, message, and reminder method (SMS/Email).

---

## 📂 Project Structure

remind-me-later/
├── 📁 controllers/
│ └── 📄 reminder.controller.js
├── 📁 models/
│ └── 📄 reminder.model.js
├── 📁 routes/
│ └── 📄 reminder.routes.js
├── 📁 config/
│ └── 📄 db.js
├── 📄 app.js
├── 📄 server.js
├── 📄 package.json
└── 📄 .env

---

### 📁 **controllers/**

Contains the **business logic** of the application.

- `reminder.controller.js` — Handles API request processing for reminders like validating inputs, interacting with the database model, and sending appropriate responses.

---

### 📁 **models/**

Defines the **data schema and structure** for MongoDB using Mongoose.

- `reminder.model.js` — Contains the Reminder schema specifying fields like date, time, message, and remind_by.

---

### 📁 **routes/**  
Defines the API **endpoints and routing logic**.  
- `reminder.routes.js` — Maps HTTP routes to controller functions and includes request validations. The following routes are defined:
  - `POST /create-reminder` — Create a new reminder with a date, time, message, and reminder method.
  - `GET /get-all-reminders` — Fetch a list of all reminders stored in the database.
  - `GET /get-reminder/:id` — Fetch a single reminder by its unique ID.



---

### 📁 **config/**

Holds configuration files for the project.

- `db.js` — Contains database connection setup and configuration logic.

---

### 📄 **app.js**

Initializes the Express application and integrates routes.

---

### 📄 **server.js**

Starts the server by listening on the specified port.

---

### 📄 **package.json**

Lists project dependencies, scripts, and metadata.

---

### 📄 **.env**

Stores environment variables such as database connection strings and port numbers (not committed to version control).

---

## 🚀 Tech Stack

- **Node.js** — JavaScript runtime
- **Express.js** — Web framework
- **MongoDB + Mongoose** — NoSQL database and object modeling
- **express-validator** — Request validation
- **dotenv** — Environment variable management

---

## How to run

1. Clone the repo
2. Install dependencies: `npm install`
3. Create `.env` with necessary variables
4. Start the server: `npm start or dev` or `node index.js`

---

# 🏍️ Knee Down – Motorcycle Racing Community Portal

## 📖 Overview

**Knee Down** is a community web application built for motorcycle racers and enthusiasts. The goal is to keep riders informed about racing-related events, meetups, and milestones in the world of two-wheeled speed. Whether it’s a charity race, a championship event, or a local community ride, this platform ensures you never miss a beat.

The portal is designed with a clean layout and dynamic features to reflect the fast-paced, high-energy lifestyle of the riding community. Built with **Node.js**, **Express**, and **EJS**, it provides dynamic rendering, smooth navigation, and a simple yet engaging user interface.

---

## 🚀 Technologies Used

| Tech | Description |
|------|-------------|
| **Node.js** | JavaScript runtime for server-side logic |
| **Express.js** | Backend framework for routing and middleware |
| **EJS** | Embedded JavaScript templating for dynamic content |
| **nodemon** | Auto-restart server on changes during development |
| **CSS** | Custom styling for a bold and modern UI |
| **express.static** | Serves static assets like images and styles |
| **express.urlencoded** | Parses incoming form data |
| **JPG Images** | Used throughout the portal to highlight racing culture |

---

## 👥 Team Members & Roles

| Name | Role |
|------|------|
| **Petri Loots** | Team Lead & Backend Developer – Managed server setup and routing logic |
| **Jayden Crosson** | Frontend Developer – Designed the UI using EJS and CSS |
| **Darrin Everette Mokuena** | Data Manager – Handled arrays and backend data rendering |
| **Mihlaliyethu Diniso** | Documentation Manager – Compiled technical and user documentation |

---

## 🛠️ Setup Instructions

Follow these steps to run **Knee Down** on your local machine:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/slmey/WPR381_Project_KneeDown
   cd WPR381_Project_KneeDown

2. **Install Dependencies**

npm install

3. **Start the Development Server**

npm run dev

4. **Production Start**

npm start

5. **Project Structure**

project-root/
│
├── public/              # Static assets (images, CSS)
├── routes/              # Route files (Express)
├── views/
│   ├── pages/           # EJS page templates (Home, About, Events, etc.)
│   └── partials/        # Header and Footer includes
├── app.js               # Main app entry point
├── package.json         # Project metadata and scripts
└── README.md            # This file
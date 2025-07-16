# NodeJS-SQLWORK

1. NodeJS-SQLWORK
This is a basic Node.js web application using Express and EJS as a template engine. The app renders simple EJS pages including static routes like `/` and `/sqlwork`.
SQLWork used to view the query on the page for developer puporses.
<img width="1766" height="905" alt="image" src="https://github.com/user-attachments/assets/ed5dab1e-9e2b-450d-aa06-75a30eef5ba1" />

---

## 🚀 Features

- Built with [Express.js](https://expressjs.com/)
- EJS view engine
- Static file support (via `/public`)
- Basic routing: `/` and `/sqlwork`

---

## 📂 Project Structure

<pre lang="md"><code>## 📁 Project Structure ``` NodeJS-SQLWORK/ ├── public/ # Static assets (CSS, JS, images) ├── views/ # EJS template files │ ├── partials/ # Reusable EJS components (header, footer) │ ├── index.ejs # Homepage view │ └── sqlwork.ejs # SQL Work page ├── app.js # Main application entry point ├── package.json # Project metadata and dependencies └── .env # Environment variables (optional) ``` </code></pre>

---

## 🛠️ Installation & Setup

### 1. Clone this repository

git clone https://github.com/yourusername/NodeJS-SQLWORK.git
cd NodeJS-SQLWORK
2. Install dependencies
npm install
This will install:
•	express
•	ejs
(You can add more packages as needed.)
________________________________________
▶️ Run the App
Basic way:
node app.js
(Optional) If you use nodemon for auto-restart:
npm install -g nodemon
nodemon app.js
________________________________________
🌐 Access in Browser
•	http://localhost:3000/ → Home page
•	http://localhost:3000/sqlwork → SQL Work page
________________________________________
✏️ Sample Routes

// app.js

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/sqlwork', (req, res) => {
  res.render('sqlwork', { title: 'Work - SQL' });
});
________________________________________


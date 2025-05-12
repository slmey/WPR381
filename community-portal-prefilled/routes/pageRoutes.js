// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

const teamInfo = [
    {name: 'Petri Loots', role: 'Team Leader, Backend Developer'},
    {name: 'Jayden Crosson', role: 'Frontend Developer'},
    {name: 'Darrin Everette Mokuena', role: 'Data Manager'},
    {name: 'Mihlaliyethu Diniso', role: 'Documentation Manager'}
];

const events = [
    {title: 'Community Cleanup', date: '2025-05-20', location: '', image: 'community-portal-prefilled/public/images/'},
    {title: 'Food Drive', date: '2025-06-10', location: '', image: 'community-portal-prefilled/public/images/'}
];

const messages = []; 

router.get('/', (req, res) => {
  res.render('home', { events });
});

router.get('/about', (req, res) => {
  res.render('about', { teamInfo });
});

router.get('/events', (req, res) => {
  res.render('events', { events });
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  messages.push({ name, email, message });
  res.redirect('/thank-you');
});

router.get('/thank-you', (req, res) => {
  res.render('thankyou');
});

module.exports = router;

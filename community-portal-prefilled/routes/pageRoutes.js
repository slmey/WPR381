// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

var contacts = [];

const teamInfo = [
    {name: 'Petri Loots', role: 'Team Leader, Backend Developer,', number: 1},
    {name: 'Jayden Crosson', role: 'Frontend Developer', number: 2},
    {name: 'Darrin Everette Mokuena', role: 'Data Manager', number: 3},
    {name: 'Mihlaliyethu Diniso', role: 'Documentation Manager', number: 4}
];

const events = [
    {title: 'Community Cleanup', date: '2025-05-20', location: '', image: 'community-portal-prefilled/public/images/'},
    {title: 'Food Drive', date: '2025-06-10', location: '', image: 'community-portal-prefilled/public/images/'}
];

const messages = []; 

// Home
router.get('/', (req, res) => {
  res.render('./pages/home', { page: 'home' });
});

// About
router.get('/about', (req, res) => {
  res.render('pages/about', { data: team, page: 'about' });
});

// Events
router.get('/events', (req, res) => {
  res.render('pages/events', { data: events, page: 'events' });
});

// Contact (GET)
router.get('/contact', (req, res) => {
  res.render('pages/contact', { page: 'contact' });
});

// Contact (POST)
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Validate input
  if (name && email && message) {
    const contact = {
            Name: name,
            Email: email,
            Message: message
        };
    
    contacts.push(contact);

    console.log('Contact successfully added')

    //logs the data currently in the in-memory array
    console.log('Contact List')
    contacts.forEach(contact => {
      console.log(`Name: ${contact.Name}, Email: ${contact.Email}, Message: ${contact.Message}`);
    })

    res.redirect('/thankyou');
  } else {
    return res.status(400).send('All fields are required.');
  }
});

// Thank You

 router.get('/thankyou', (req, res) => {
  res.render('pages/thankyou', { page: '' });
});

module.exports = router;

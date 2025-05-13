// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

var contacts = [];

const team = [
    {name: 'Petri Loots', role: 'Team Leader, Backend Developer,', number: 1},
    {name: 'Jayden Crosson', role: 'Frontend Developer', number: 2},
    {name: 'Darrin Everette Mokuena', role: 'Data Manager', number: 3},
    {name: 'Mihlaliyethu Diniso', role: 'Documentation Manager', number: 4}
];

const events = [
    {title: 'Charity Race', date: '2025-05-24', location: '', image: '/images/allwsbk.jpg'},
    {title: 'Championship Opening Race', date: '2025-06-8', location: 'Jerez', image: '/images/all riders.jpg'},
    {title: 'Championship Second Race', date: '2025-06-22', location: 'Mugello', image: '/images/bb33.jpg'},
    {title: 'Championship Third Race', date: '2025-07-6', location: 'Sachsenring', image: '/images/jz brake.jpg'},
    {title: 'Championship Final Race', date: '2025-07-13', location: 'Valencia', image: '/images/fq20.jpg'},
    {title: 'Championship Celebration', date: '2025-07-14', location: 'Valencia', image: '/images/mm93 win.jpg'},
    {title: 'Knee Down Meet Up', date: '2025-07-25', location: 'Termas de Rio Hondo', image: '/images/ba 1.jpg'}
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

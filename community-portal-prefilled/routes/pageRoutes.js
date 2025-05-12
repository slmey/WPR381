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

//home
router.get('/', (req, res) => {
  res.render('home', { events });
});


//about
router.get('/about', (req, res) => {
  res.render('about', { teamInfo });
});

//events
router.get('/events', (req, res) => {
  res.render('events', { events });
});

//contact (get)
router.get('/contact', (req, res) => {
  res.render('contact');
});

//contact (post)
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

//thank you 
router.get('/thank-you', (req, res) => {
  res.render('thankyou');
});

module.exports = router;

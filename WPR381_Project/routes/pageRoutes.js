// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

var contacts = [];

const team = [
    {name: 'Petri Loots', role: 'Team Leader, Backend Developer,', number: 1, image: '/images/mm93lean.jpg'},
    {name: 'Jayden Crosson', role: 'Frontend Developer', number: 2, image: '/images/fq20lean.jpg'},
    {name: 'Darrin Everette Mokuena', role: 'Data Manager', number: 3, image: '/images/am73lean.jpg'},
    {name: 'Mihlaliyethu Diniso', role: 'Documentation Manager', number: 4, image: '/images/jz5lean.jpg'}
];

const events = [
  {
    id: 1,
    title: 'Charity Race',
    date: '2025-05-24',
    location: 'Valencia',
    price: '00',
    image: '/images/allriders.jpg',
    description: 'Join us for a thrilling charity race in Valencia to raise funds and awareness for local communities.'
  },
  {
    id: 2,
    title: 'Championship Opening Race',
    date: '2025-06-08',
    location: 'Jerez',
    price: '100',
    image: '/images/lean.jpg',
    description: 'The first official race of the championship season kicks off in Jerez. Expect fierce competition and blazing speed!'
  },
  {
    id: 3,
    title: 'Championship Second Race',
    date: '2025-06-22',
    location: 'Mugello',
    price: '100',
    image: '/images/bb33.jpg',
    description: 'The action continues at Mugello. Who will climb the ranks and who will fall behind?'
  },
  {
    id: 4,
    title: 'Championship Third Race',
    date: '2025-07-06',
    location: 'Sachsenring',
    price: '100',
    image: '/images/jz brake.jpg',
    description: 'Mid-season showdown at Sachsenring. Riders must stay sharp as the championship intensifies.'
  },
  {
    id: 5,
    title: 'Championship Final Race',
    date: '2025-07-13',
    location: 'Valencia',
    price: '100',
    image: '/images/fq20.jpg',
    description: 'The grand finale of the season. Only one rider will claim the title in this ultimate test of speed and skill.'
  },
  {
    id: 6,
    title: 'Championship Celebration',
    date: '2025-07-14',
    location: 'Valencia',
    price: '50',
    image: '/images/mm93 win.jpg',
    description: 'Celebrate the champions with live music, rider meet-and-greets, and unforgettable moments.'
  },
  {
    id: 7,
    title: 'Knee Down Meet Up',
    date: '2025-07-25',
    location: 'Termas de Rio Hondo',
    price: '00',
    image: '/images/mm93wave.jpg',
    description: 'Join the Knee Down community for a casual ride, good vibes, and fresh tarmac in Termas.'
  }
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

// Event Detail
router.get('/events/:id', (req, res) => {
  const eventId = parseInt(req.params.id);
  const event = events.find(e => e.id === eventId);

  if (event) {
    res.render('pages/event-detail', { event, page: 'events' });
  } else {
    res.status(404).send('Event not found');
  }
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

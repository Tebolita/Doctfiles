const { Router } = require('express');
const { database } = require('firebase-admin');
const router = Router();

const admin = require('firebase-admin');

let serviceAcount = require('../../animeproyect-7e129-firebase-adminsdk-pgj4b-75ea889988.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAcount),
    databaseURL: 'https://animeproyect-7e129-default-rtdb.firebaseio.com/'
});

const db = admin.database();

router.get('/', (req,res) => {
    console.log('Index works!')
   res.render('index');
})


router.post('/new-contact', (req, res) => {
    console.log(req.body);
    const newContact = {
        Firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
    }
    db.ref('contacts').push(newContact);
    res.send('received');
})




module.exports = router
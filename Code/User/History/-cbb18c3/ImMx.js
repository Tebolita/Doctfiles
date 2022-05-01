const { Router } = require('express');
const { database } = require('firebase-admin');
const router = Router();

const admin = require('firebase-admin');
const { applicationDefault } = require('firebase-admin/app');

let serviceAcount = require('../../animeproyect-7e129-firebase-adminsdk-pgj4b-c39f96b4dc.json')

admin.initializeApp({
    credential: 
    databaseURL: 'https://animeproyect-7e129-default-rtdb.firebaseio.com/'
});

const db = admin.database();

router.get('/', (req,res) => {
    console.log('Index works!')
   res.render('index');
})


router.post('/new-contact', (req, res) => {

    try {
        console.log(req.body);
        const newContact = {
            Firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone
        }
        db.ref('contacts').push(newContact);
        res.send('received');
    } catch (error) {
        res.send(error)
    }


})




module.exports = router
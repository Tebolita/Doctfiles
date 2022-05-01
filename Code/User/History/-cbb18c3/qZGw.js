const { Router } = require('express');
const { database } = require('firebase-admin');
const router = Router();

const admin = require('firebase-admin');
const { applicationDefault } = require('firebase-admin/app');

let serviceAccount = require('/home/tebolita/Descargas/animeproyect-7e129-firebase-adminsdk-pgj4b-6a8c6748ed.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://animeproyect-7e129-default-rtdb.firebaseio.com/'
});

const db = admin.database();

router.get('/', (req,res) => {
    db.ref('contacts').once('value',(snapshot) => {
        const data = snapshot.val();
        res.render('index', {contacts: data});
    });
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
        console.log(error)
    }
});

router.post('/view-contact', (req, res) => {
    
})




module.exports = router
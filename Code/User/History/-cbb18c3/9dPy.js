const { Router } = require('express');
const router = Router();

router.get('/', (req,res) => {
    console.log('Index works!')
   res.render('index');
})


module.exports = router
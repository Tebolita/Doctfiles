const { Router } = require("express")
const router = Router()

router.get("/Home", (req,res) => 
    {
        res.send('Pagina de inicio')
    }
)


module.exports = router
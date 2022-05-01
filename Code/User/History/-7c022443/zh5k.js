const { Router } = require("express")
const router = Router()

router.get("/", (req,res) => 
    {
        res.send('Pagina de inicio')
    }
)


router.get("/video", (req,res) => 
    {
        res.send('Pagina de videos')
    }
)

module.exports = router
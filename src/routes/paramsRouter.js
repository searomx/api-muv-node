const router = require('express').Router();
var xtoken = "";


router.post('/token', async (req, res) => {
    const xtoken = req.body;
    try {
        console.log(xtoken);      
    } catch (error) {
        res.status(500).json({error: error}); 
    }
});

router.get('/:token', async (req, res) => {
    const token = req.params.token;
    token = token.trim();
  try {
        console.log(token);
  } catch (error) {
    res.status(500).json({error: error});
    
  }
});
module.exports = router;


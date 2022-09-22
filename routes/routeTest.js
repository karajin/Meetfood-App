const express = require('express');
const router = express.Router();
const UserTest = require('../models/userTest');

// const authenicateService = require('./middleware/test')

// router.get('/meetfood', authenicateService, async (req, res) => {
    
//     res.send('<h2>Hello from Express.js server!!</h2>');
// })

router.get('/meetfood',async (req, res) => {
      // Create a user
/*const user = new UserTest({
    firstName: 'Max',
    userName: 'Onecareer',
  });
  
  await user.save();
  */
  
    res.send('<h2>Hello from Express.js server!!</h2>');
})

module.exports = router;

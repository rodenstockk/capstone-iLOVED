const express = require('express');
const router = express.Router();
// const uuid = require('uuid');

const fs = require('fs');


let data = fs.readFileSync('fav.json');
let fav = JSON.parse(data);


router.get('/favorite', (req, res) => {
    res.json(fav)
});

router.get('/favorite/:name', (req, res) => {
  let currFav = req.params.name
  ? fav.find(meal => meal.name === req.params.name)
  : fav;
  
  res.json(currFav)
});

router.post('/favorite', (req, res) => {
    console.log(req.params)

    fav.push(req.body);
    res.json(fav)
  });



router.delete('/favorite/:name', (req, res) => {
                
  let mealToBeRemoved = fav.findIndex( meal => meal.name === req.params.name )
  fav.splice(mealToBeRemoved, 1);

  res.send(JSON.stringify(fav));
});




module.exports = router; 
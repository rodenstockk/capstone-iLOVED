const express = require('express');
const router = express.Router();
// const uuid = require('uuid');

const fs = require('fs');


let data = fs.readFileSync('fav.json');
let fav = JSON.parse(data);


router.get('/favorite', (req, res) => {
    res.json(fav)
});


// router.get('/restaurants/:id', (req, res)=> {
            
//     let currRest = req.params.id
//     ? rests.find(restaurants => restaurants.id === req.params.id)
//     : rests;
    
//     if(!currRest){
//         res.status(404).json({error: 'id not found'})
//         return;
//     }
//     res.json(currRest)
// })


router.post('/favorite', (req, res) => {
    console.log(req.params)
    // let currFav = req.params.id
    // ? rests.find(restaurants => restaurants.id === req.params.id)
    // : rests;

    fav.push(req.body);
    res.json(fav)
  });

module.exports = router; 
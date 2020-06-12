const express = require('express');
const router = express.Router();
// const uuid = require('uuid');

const fs = require('fs');

// fs.readFile('rests.json', (err, data) => {
//     if (err) throw err;
//     let rests = JSON.parse(data);
//     console.log(rests);
// });

let data = fs.readFileSync('rests.json');
let rests = JSON.parse(data);


router.get('/restaurants', (req, res) => {
    res.json(rests)
});


router.get('/restaurants/:id', (req, res)=> {
            
    let currRest = req.params.id
    ? rests.find(restaurants => restaurants.id === req.params.id)
    : rests;
    
    if(!currRest){
        res.status(404).json({error: 'id not found'})
        return;
    }
    res.json(currRest)
})


router.get('/restaurants/:id/menu/:name', (req, res)=> {
            
    let currRest = req.params.id
    ? rests.find(restaurants => restaurants.id === req.params.id)
    : rests;
    
    let currMenu = currRest.menu.find(menu => menu.name === req.params.name)
      
    if(!currMenu){
        res.status(404).json({error: 'id not found'})
        return;
    }
    res.json(currMenu)
})


router.put('/restaurants/:id/menu/:name', (req, res)=> {
            
    let currRest = req.params.id
    ? rests.find(restaurants => restaurants.id === req.params.id)
    : rests;
    
    let currMenu = currRest.menu.find(menu => menu.name === req.params.name)
    console.log(req.body)


    if ('showModal' in req.body) {
        currMenu['showModal'] = req.body.showModal
        console.log(currMenu)
    } 
    
    
    else {
        currMenu.iLoved = req.body.iLoved
        currMenu.willLove = req.body.willLove
        currMenu.enough = req.body.enough
    }
    if(!currMenu){
        res.status(404).json({error: 'id not found'})
        return;
    }
    res.json(currMenu)
})



router.post('/restaurants/:id/experience', (req, res) => {
    console.log(req.params)
    let currRests = req.params.id
    ? rests.find(restaurants => restaurants.id === req.params.id)
    : rests;

    currRests.experience.push(req.body);
    res.json(currRests.experience)
  });

module.exports = router; 
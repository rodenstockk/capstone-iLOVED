const functions = require('firebase-functions');
const admin = require('firebase-admin');

var serviceAccount = require("./permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://iloved-61257.firebaseio.com"
});

const express = require('express');
const app = express();

const db = admin.firestore();

const cors = require('cors');
app.use(cors());


//Routes
// app.get('/', (req, res) => {
//     return res.status(200).send('what!!!!!!!!!')
// })


//Create
app.post('/restaurants', (req, res) => {
    (async () => {

        try
        {
            await db.collection('restaurants').doc('/' + req.body.id + '/')
            .create({                
                name: req.body.name,
                address: req.body.address,
                phone: req.body.phone,
                intro : req.body.intro,
                catag: req.body.catag,
                image: req.body.image,
                experience: req.body.experience,
                menu: req.body.menu
            })
            return res.status(200).send();
        }
        catch (error) 
        {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
})


app.post('/favorite', (req, res) => {
    (async () => {

        try
        {
            await db.collection('favorite').doc('/' + req.body.name + '/')
            .create(req.body)
            return res.status(200).send();
        }
        catch (error) 
        {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
})


//Read

app.get('/restaurants/:id', (req, res) => {
    (async () => {

        try
        {
            const document = db.collection('restaurants').doc(req.params.id);
            let restaurants = await document.get();
            let response = restaurants.data();
            console.log(response.menu);
            return res.status(200).send(response);
        }
        catch (error) 
        {
            console.log(error);
            return res.status(500).send(error);
        }

    })();
})

app.get('/favorite/:name', (req, res) => {
    (async () => {

        try
        {
            const document = db.collection('favorite').doc(req.params.name);
            let favorite = await document.get();
            let response = favorite.data();
            console.log(response);
            return res.status(200).send(response);
        }
        catch (error) 
        {
            console.log(error);
            return res.status(500).send(error);
        }

    })();
})

app.delete('/favorite/:name', (req, res) => {
    (async () => {

        try
        {
            const document = db.collection('favorite').doc(req.params.name);
            await document.delete();
            return res.status(200).send();
        }
        catch (error) 
        {
            console.log(error);
            return res.status(500).send(error);
        }

    })();
})


app.get('/restaurants/:id/menu/:name', (req, res)=> {
    (async () => {

        try
        {
            const document = db.collection('restaurants').doc(req.params.id);
            let restaurants = await document.get();
            let menuData = restaurants.data().menu;
            console.log(menuData)
            let currMenu = menuData.find(menu => menu.name === req.params.name)


            return res.status(200).send(currMenu);
        }
        catch (error) 
        {
            console.log(error);
            return res.status(500).send(error);
        }

    })();
})

// app.get('/restaurants/:id/menu', (req, res)=> {
//     (async () => {

//         try
//         {
//             const document = db.collection('restaurants').doc(req.params.id);
//             let restaurants = await document.get();
//             let menuData = restaurants.data().menu;


//             return res.status(200).send(menuData);
//         }
//         catch (error) 
//         {
//             console.log(error);
//             return res.status(500).send(error);
//         }

//     })();
// })


app.post('/restaurants/:id/experience/', (req, res)=> {
    (async () => {

        try
        {
            const document = db.collection('restaurants').doc(req.params.id)

            let restaurants = await document.get();

            let restData = restaurants.data();
            restData.experience.push(req.body) 
           
           
            document.set(restData)


            return res.status(200).send('Hi hi');
        }
        catch (error) 
        {
            console.log(error);
            return res.status(500).send(error);
        }

    })();
})



app.get('/restaurants', (req, res) => {
    (async () => {

        try
        {
            let query = db.collection('restaurants');
            let response = [];

            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs; 

                for (let doc of docs)
                {
                    const selectedItem = {
                        id: doc.id,
                        name: doc.data().name,
                        address: doc.data().address,
                        phone: doc.data().phone,
                        intro : doc.data().intro,
                        catag: doc.data().catag,
                        image: doc.data().image,
                        experience: doc.data().experience,
                        menu: doc.data().menu
                    };
                    response.push(selectedItem)
                }
                return response;
            })
            return res.status(200).send(response);
        }
        catch (error) 
        {
            console.log(error);
            return res.status(500).send(error);
        }
        
    })();
})


app.get('/favorite', (req, res) => {
    (async () => {

        try
        {
            let query = db.collection('favorite');
            let response = [];

            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs; 

                for (let doc of docs)
                {
                    const selectedItem = {
                        id: doc.id,
                        name: doc.data().name,
                        price: doc.data().price,
                        intro: doc.data().intro,
                        catag: doc.data().catag,
                        image: doc.data().image,
                        iLoved: doc.data().iLoved,
                        willLove: doc.data().willLove,
                        enough: doc.data().enough
                    };
                    response.push(selectedItem)
                }
                return response;
            })
            return res.status(200).send(response);
        }
        catch (error) 
        {
            console.log(error);
            return res.status(500).send(error);
        }
        
    })();
})



app.put('/restaurants/:id/menu/:name', (req, res)=>  {
    (async () => {

        try
        {
            const document = db.collection('restaurants').doc(req.params.id);
            let restaurants = await document.get();
            
            let restData = restaurants.data();
            let menuData = restData.menu;
            
            let currMenu = menuData.find(menu => menu.name === req.params.name)
            console.log(currMenu)
            
            // if ('showModal' in req.body) {
            //     currMenu['showModal'] = req.body.showModal
            //     console.log(currMenu)

            //     document.set(restData)
            // } 
            
            // else {
                currMenu.iLoved = req.body.iLoved
                currMenu.willLove = req.body.willLove
                currMenu.enough = req.body.enough

                document.set(restData)
            // }
            // if(!currMenu){
            //     res.status(404).json({error: 'id not found'})
            //     return;
            // }

            return res.status(200).send(currMenu);
        }
        catch (error) 
        {
            console.log(error);
            return res.status(500).send(error);
        }

    })();
})




//Export the api to Firebase Cloud Function
exports.app = functions.https.onRequest(app);


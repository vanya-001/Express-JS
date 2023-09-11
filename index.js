const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello World')
});

// app.get('api/members', (req,res)=>{
    // res.json(memebers);
// })

// To get the URL after sending the get request in Postman, you'll get the output as the URL link of the website and the time format from moment()

// const logger = (req, res, next) =>{
//     console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`)
//     next();
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on PORT ${PORT}`)); 
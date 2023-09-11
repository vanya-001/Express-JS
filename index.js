const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello World')
});

// app.get('api/members', (req,res)=>{
    // res.json(memebers);
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on PORT ${PORT}`));
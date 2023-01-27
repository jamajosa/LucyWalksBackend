//routes
const pathRoutes = require('./routes/paths')
const pointRoutes = require('./routes/point')
const userRoutes = require('./routes/users')
const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const User = require('./model/User');
const app = express();
app.use(express.json());
app.use(cookieParser());


const checkToken = (req, res, next) => {
    const header = req.headers['cookie'];
    if(typeof header !== 'undefined') {
        jwt.verify(req.cookies.jwt,process.env.JWT_SECRET,(err,decodedToken) =>{
            if(err){
                res.sendStatus(403)
            }
            else{
                console.log(decodedToken);
                next();
            }
        })
    } 
    else {
        res.sendStatus(403)
    }
}


app.use('/users',userRoutes);
app.use('/paths', checkToken,  pathRoutes);
app.use('/point',  pointRoutes);
//first route
app.get('/',(req,res) =>{
    res.send("hello world :)")
});



module.exports=app;
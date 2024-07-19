import express from 'express';
import cors from 'cors';
import hallBookingRouter from './Router/hallBookingRouter.js'

const app = express();
app.use(express.json());
app.use(cors());

const port = 4000;

app.get('/',(req, res)=>{
    res.status(200).json({message:"Welcome to Our Party's Hall Booking"})
})

app.use('/api/hallbooking', hallBookingRouter);



app.listen(port, ()=>{console.log("App is Listening:", port);})
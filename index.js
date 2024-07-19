import express from 'express';
import cors from 'cors';
import hallBookingRouter from './Router/hallBooking.router.js'

const app = express();
app.use(express.json());
app.use(cors());

const port = 4000;

app.get('/',(req, res)=>{
    res.status(200).send(`<div style="text-align: center; background-color:lightblue;  padding: 10px;"><h1>Welcome to Our Hall Booking Page</h1></div>
        <div>
        <ul>
        <li>
        <h3><mark>Get:</mark> Use the endpoint to <mark>/api/hallbooking/getDetails</mark> to get the All Room Details</h3>
        </li>
    
        <li>
        <h3><mark>Post:</mark> Use the endpoint to <mark>/api/hallbooking/newRoom</mark> to Create the New Room</h3>
        </li>
    
        <li>
        <h3><mark>Get:</mark> Use the endpoint to <mark>/api/hallbooking/newbooking</mark> to Book a New Room</h3>
        </li>
    
        <li>
        <h3><mark>Get:</mark> Change the endpoint to <mark>/api/hallbooking/bookedRoomDetails</mark> to retrieve Booked Room Data</h3>
        </li>
    
        <li>
        <h3><mark>Get:</mark> Change the endpoint to <mark>/api/hallbooking/customerBookedDetails</mark> to retrieve Data of Booked Customers and Rooms</h3>
        </li>
    
        <li>
        <h3><mark>Get:</mark> Change the endpoint to <mark>/api/hallbooking/cusbookcount</mark> to retrieve Booking Counts and Room Data for Booked Customers</h3>
        </li>
    
        </ul> 
        </div>`)
})

app.use('/api/hallbooking', hallBookingRouter);



app.listen(port, ()=>{console.log("App is Listening:", port);})
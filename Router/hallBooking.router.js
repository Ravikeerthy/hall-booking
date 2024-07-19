import express from 'express';
import { bookedDetails, bookedHall, createNewHallDetails, customerBookingDetails, getHallDetails, hallBooking } from '../Controller/hallBooking.controller.js';

const router = express.Router();

router.get('/getDetails', getHallDetails);
router.post('/newRoom', createNewHallDetails);
router.post('/newbooking', hallBooking);
router.get('/bookedRoomDetails', bookedHall);
router.get('/customerBookedDetails', bookedDetails);
router.get('/cusbookcount', customerBookingDetails)


export default router;
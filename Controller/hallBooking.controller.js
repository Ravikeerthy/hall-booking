const hallDetails = [
    {
        roomId:1,
        roomName:"Billiard hall",
        roomStatus: "available",
        amenities:" Mobile Check-In, Parking, Wi-Fi, Swimming pool,Restaurant, Projector",
        seats:40,
        pricePerHour: 3000
    },
    {
        roomId:2,
        roomName:"Concert hall",
        roomStatus: "available",
        amenities:" Mobile Check-In, Parking, Wi-Fi, Swimming pool,Restaurant, Projector, DJ's, Sound System",
        seats:100,
        pricePerHour: 5000
    },
    {
        roomId:3,
        roomName:"Convention center",
        roomStatus: "available",
        amenities:" Mobile Check-In, Parking, Wi-Fi, Swimming pool,Restaurant, Projector, Toilets",
        seats:1000,
        pricePerHour: 10000
    },
    {
        roomId:4,
        roomName:"Dance hall",
        roomStatus: "available",
        amenities:" Mobile Check-In, Parking, Wi-Fi, Swimming pool,Restaurant, Projector",
        seats:100,
        pricePerHour: 3000
    },
    {
        roomId:5,
        roomName:"Dining hall",
        roomStatus: "available",
        amenities:" Mobile Check-In, Parking, Wi-Fi, Swimming pool,Restaurant, Projector",
        seats:500,
        pricePerHour: 7000
    },
    {
        roomId:6,
        roomName:"Prayer hall",
        roomStatus: "available",
        amenities:" Mobile Check-In, Parking, Wi-Fi,Restaurant, Projector",
        seats:100,
        pricePerHour: 2000
    }
];

export const getHallDetails = (req, res) =>{
        res.status(200).json({message:"List of halls for booking..",data:hallDetails});
}

let bookedRoom =[];  // intializing empty array to pusg the booked room details

export const createNewHallDetails= (req, res)=>{   // Creating new hall rooms
    const {roomName, roomStatus, amenities, seats, pricePerHour} = req.body;
    const newRoomDetails = {
        roomId:hallDetails.length + 1,
        roomName:roomName,
        roomStatus:roomStatus,
        amenities:amenities,
        seats:seats,
        pricePerHour:pricePerHour
    }
    // console.log(newRoomDetails);
    hallDetails.push(newRoomDetails);
    res.status(200).json({message:"New Hall room is successfully created", NewRoom:hallDetails})
}

//Hall Booking

export const hallBooking = (req,res) =>{
    const {customerName, date, checkIn, checkOut, roomId} = req.body;

    let room = hallDetails.filter((e)=>e.roomStatus == "available" && e.roomId == roomId);

    if(!room){
        return res.status(400).json({message:"Rooms are not available"});
    }else{
        let bookingDate = bookedRoom.filter((e)=>e.bookingDate == date && e.roomId==roomId);
        if(bookingDate.length>0){
            return res.status(400).json({message:"Hall is booked already"});
        }
        else{
            let booking = {
                roomId :bookedRoom.length +1,
                customerName,
                checkIn,
                checkOut, 
                bookingId : bookedRoom.length +1,
                bookingDate : date,
                status : "Booked"
            }
            bookedRoom.push(booking)

           
            return res.status(200).json({message:"Your Hall is Booked Successfully", BookedRooms:bookedRoom});
        }
    }
    
}

// Hall Booked Deatils

export const bookedHall = (req,res)=>{
res.status(200).json({message:"Successfully fetched all Halls data", data:bookedRoom});
}

// All customers and their booked details

export const bookedDetails = (req, res)=>{
    const customerData = bookedRoom.map((booking)=>{
        const room = hallDetails.find((e)=> e.roomId == booking.roomId);
        return {
            roomId  :booking.roomId,
            roomName : room? room.roomName :"unknown",
            customerName:booking.customerName,
           bookingDate: booking.bookingDate,
            checkIn:booking.checkIn,
            checkOut:booking.checkOut
        }
    })
    
    res.status(200).json({message:"Customers Booked Hall Details", customerData})
}

// List of regular customer Details

export const customerBookingDetails = (req, res)=>{
    const customerBooking = {};

    bookedRoom.forEach((booking)=>{
        const {roomId, customerName, bookingDate, checkIn, checkOut, bookingId, status} = booking
        if(!customerBooking[customerName]){
            customerBooking[customerName]=[];
        }
        customerBooking[customerName].push({roomId, bookingDate, checkIn, checkOut, bookingId, status})

    })
    const customerData = Object.keys(customerBooking).map(customerName =>{
        const bookings = customerBooking[customerName];
        
        
        const count = bookings.length;
        return {customerName, bookings, count}
    });
    
    res.status(200).json({message:"Total number of Booked customers:", customerData});
}



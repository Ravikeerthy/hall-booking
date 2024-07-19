**Hall Booking System**

**Overview**
The Hall Booking System is a web application that allows users to view, create, and manage bookings for various halls. This application includes functionalities for viewing available halls, booking a hall, and retrieving booking details. The backend is built using Node.js and Express, with data stored in memory for simplicity.

**Features**
View Hall Details: Get a list of all available halls along with their details such as room name, status, amenities, seating capacity, and price per hour.
Create New Hall: Add new halls to the system with specified details.
Book a Hall: Book a specific hall for a customer on a given date with specified check-in and check-out times.
View Booked Hall Details: Retrieve all bookings made for the halls.
Customer Booking Details: Retrieve details of all customers who have booked halls along with their booking details.
Regular Customer Details: Retrieve a summary of bookings made by regular customers.

**Usage**
Used Postman API testing tool to interact with the endpoints.
Added screenshot for all the api

**API Endpoints**
GET /api/hallbooking/getDetails : Retrieve all room details.
POST /api/hallbooking/newRoom: Create a new room.
POST /api/hallbooking/newbooking: Book a room.
GET /api/hallbooking/bookedRoomDetails : Retrieve booked room data.
GET  /api/hallbooking/customerBookedDetails : Retrieve data of booked customers and rooms.
GET/api/hallbooking/cusbookcount: Retrieve booking counts and room data for booked customers.

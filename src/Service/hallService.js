let hall = [
  { roomId: 1, name: "hall1", seats: 100, price: 100, amenities: "AC" },
  { roomId: 2, name: "hall2", seats: 50, price: 50, amenities: "AC" },
  { roomId: 3, name: "hall3", seats: 75, price: 75, amenities: "AC" },
  { roomId: 4, name: "hall4", seats: 100, price: 90, amenities: "Non-AC" },
  { roomId: 5, name: "hall5", seats: 50, price: 40, amenities: "Non-AC" },
];
let bookings = [
  {
    bookingId: 1,
    userName: "David",
    Date: "12/03/2024",
    startTime: "8:00AM",
    endTime: "7:30pm",
    roomId: 2,
  },
  {
    bookingId: 2,
    userName: "Robert",
    Date: "13/03/2024",
    startTime: "10:00AM",
    endTime: "9:30pm",
    roomId: 1,
  },
  {
    bookingId: 3,
    userName: "Tony",
    Date: "14/03/2024",
    startTime: "9:30AM",
    endTime: "5:30pm",
    roomId: 3,
  },
  {
    bookingId: 4,
    userName: "Michel",
    Date: "15/03/2024",
    startTime: "11:30AM",
    endTime: "8:30pm",
    roomId: 5,
  },
];


// Getting all Hall Details
const getHallDetails = (req, res) => {
  try {
    res.json(hall);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving halls.",
    });
  }
};


// Getting all Booking Details
const getBookingDetails = (req, res) => {
  try {
    res.json(bookings);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving bookings.",
    });
  }
};

// To create Room
const roomCreate =(req,res)=>{
    try{
        const {seats,amenities,name,price}=req.body
        const createdRoom={roomId:hall.length ? hall[hall.length-1].roomId + 1 : 1,seats,amenities,name,price}
        console.log(createdRoom);
        
        hall.push(createdRoom)
        res.json({message:"Room created successfully",data:createdRoom})
    }catch(error){
        res.status(500).send({message:error.message||"Some error occurred while creating room."
            });
    }
}

//To Book Room
const bookRoom=(req,res)=>{
    try{
        const {userName,Date,startTime,endTime,roomId}=req.body
        const bookingId=hall.length ? hall[hall.length-1].roomId + 1 : 1;
        const createdBooking={bookingId,userName,Date,startTime,endTime,roomId}
        console.log(createdBooking);
        
        bookings.push(createdBooking)
        res.json({
            message:"Room booked successfully",
            data:createdBooking
        })
    }catch(error){
        res.status(500).send({message:error.message||"Some error occurred while booking room."
            });
    }
}


// To See Booked data with customer data
const bookedData =(req,res)=>{
    try{
        const roomsWithBookings = hall.map(hall => {
            const roomBookings = bookings.filter(bookings => bookings.roomId === hall.roomId);
            return {
              ...hall,
              bookings: roomBookings
            };
          });
          res.json({message:"Booked data",data:roomsWithBookings})
    }catch(error){
        res.status(500).send({message:error.message||"Some error occurred while retrieving bookings."
            });
    }
}

//To see all customers with booked data
const bookedUser= (req,res)=>{
    try{
        const user= bookings.map(bookings=>{
            const bookingDetail= hall.filter(hall=>hall.roomId===bookings.roomId)
            return{
                ...bookings,
               hall:bookingDetail[0]
                }
        })
        res.json({message:"Booked user data",data:user})
        
    }catch(error){
        res.status(500).send({message:error.message||"Some error occurred while retrieving user bookings"
            });
      }
}


//To see Customer detail and booking detail by username

const getBookingByUser =(req,res)=>{
    try{
        const { username } = req.params;
        const userBookings = bookings.filter(booking => booking.userName === username);
        res.json(userBookings);
    }catch(error){
        res.status(500).send({message:error.message||"Some error occurred while retrieving user bookings"
            });
    }
}

export default {
  getHallDetails,
  getBookingDetails,
  roomCreate,
  bookRoom,
  bookedData,
  bookedUser,
  getBookingByUser
};

import express from  'express'
import hallService from './../Service/hallService.js'

const hallController= express.Router()

hallController.get('/hall-Detail',hallService.getHallDetails)
hallController.get('/booking-Detail',hallService.getBookingDetails)
hallController.post('/create-Room',hallService.roomCreate)
hallController.post('/book-Room', hallService.bookRoom)
hallController.get('/booked-Room',hallService.bookedData)
hallController.get('/booked-Users',hallService.bookedUser)
hallController.get('/room-Booked/:username',hallService.getBookingByUser)

export default hallController
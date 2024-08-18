# Hall Booking API

# API Endpoints
1.Get Hall Details
# Endpoint: /hall-Detail
Method: GET
Description: Retrieves the details of all available halls.

2.Get Booking Details
# Endpoint: /booking-Detail
Method: GET
Description: Retrieves the details of all room bookings.

3.Create Room
# Endpoint: /create-Room
Method: POST
Description: Creates a new room.

4.Book Room
# Endpoint: /book-Room
Method: POST
Description: Books a room.

5.Get Booked Rooms
# Endpoint: /booked-Room
Method: GET
Description: Retrieves all rooms that have been booked.

6.Get Booked Users
# Endpoint: /booked-Users
Method: GET
Description: Retrieves a list of users who have booked rooms.

7.Get Room Booked by User
# Endpoint: /room-Booked/:username
Method: GET
Description: Retrieves booking details for a specific user.
Parameters:
username (String) - The username of the user whose booking details are to be retrieved.

# UberClone

## Overview

UberClone is a full-stack ride-hailing application inspired by Uber, allowing riders (users) to book rides and captains (drivers) to accept and complete them. The project demonstrates real-time location tracking, route visualization, and secure authentication for both roles.

---

## Features

- **User & Captain Registration/Login:**  
  Secure authentication for riders and captains.
- **Ride Booking:**  
  Riders can search for destinations, view fare estimates, and book rides.
- **Captain Discovery:**  
  Nearby captains are shown on the map when a ride is requested.
- **Real-Time Location Tracking:**  
  Captains update their location via sockets; riders see captain movement live.
- **Route & Directions:**  
  Google Maps API is used to display routes and directions between pickup, destination, and captain.
- **Ride Lifecycle:**  
  Includes ride confirmation, start (with OTP), and end.
- **Address Suggestions:**  
  Google Places API provides autocomplete for addresses.
- **Fare Calculation:**  
  Distance and time are fetched using Google Distance Matrix API.

---

## Tech Stack

- **Frontend:**  
  - React  
  - @react-google-maps/api  
  - Context API  
  - GSAP (animations)
- **Backend:**  
  - Node.js  
  - Express  
  - MongoDB (Mongoose)  
  - Socket.io  
  - Google Maps APIs (Geocoding, Directions, Distance Matrix, Places)
- **Other Technologies:**  
  - JWT for authentication  
  - Cookie-based sessions  
  - CORS for cross-origin requests

---

## API Integrations

- **Google Maps JavaScript API:**  
  Renders interactive maps for riders and captains.
- **Google Geocoding API:**  
  Converts addresses to latitude/longitude.
- **Google Distance Matrix API:**  
  Calculates distance and estimated time between locations.
- **Google Places API:**  
  Provides address autocomplete suggestions.

---

## Project Structure

```
UberClone/
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── middlewares/
│   ├── config/
│   ├── app.js
│   ├── server.js
│   └── README.md
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── auth/
│   │   ├── api/
│   │   └── utils/
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── README.md
```

---

## Screenshots

- [User Login Page](https://github.com/Vidhi-0603/UberClone/blob/main/Screenshot%202025-09-27%20123746.png)

- [Captain Login Page](https://github.com/Vidhi-0603/UberClone/blob/main/Screenshot%202025-09-27%20124124.png)

-[Location Search Suggestions](https://github.com/Vidhi-0603/UberClone/blob/main/Screenshot%202025-09-27%20132540.png)

-[Rider Home Page](https://github.com/Vidhi-0603/UberClone/blob/main/Screenshot%202025-09-27%20131232.png)

-[Nearby Captains](https://github.com/Vidhi-0603/UberClone/blob/main/Screenshot%202025-09-27%20143019.png)

-[location tracking](https://github.com/Vidhi-0603/UberClone/blob/main/Screenshot%202025-09-27%20132846.png)

## Mobile View:

-[waiting For Captain](https://github.com/Vidhi-0603/UberClone/blob/main/Screenshot%202025-09-27%20132927.png)

-[sharing OTP](https://github.com/Vidhi-0603/UberClone/blob/main/Screenshot%202025-09-27%20133010.png)

-[Live Ride location after ride started](https://github.com/Vidhi-0603/UberClone/blob/main/Screenshot%202025-09-27%20133103.png)

(https://github.com/Vidhi-0603/UberClone/blob/main/Screenshot%202025-09-27%20133112.png)

-[Ride Details after completion](https://github.com/Vidhi-0603/UberClone/blob/main/Screenshot%202025-09-27%20133123.png)

---

## Author

[Vidi-0603](https://github.com/Vidhi-0603)

---

## License

MIT

---

## Additional Resources

- [Backend Documentation](./Backend/README.md)
- [Frontend Documentation](./Frontend/README.md)

---

## Getting Started

1. Clone the repository.
2. Set up `.env` files in both `Backend` and `Frontend` folders with your Google Maps API key and MongoDB URI.
3. Install dependencies in both folders:
   ```
   cd Backend && npm install
   cd ../Frontend && npm install
   ```
4. Start backend and frontend servers.
5. Open the frontend in your browser and start booking rides!

---
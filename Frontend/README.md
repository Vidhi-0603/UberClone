# UberClone Frontend

## Overview

This project is a frontend for an Uber-like ride-hailing app, supporting registration and login for both riders (users) and captains (drivers), and integrating Google Maps for location and route visualization.

---

## Registration & Login

### Rider (User)

- **Registration Fields:**
  - `firstname` (string, required)
  - `lastname` (string, required)
  - `email` (string, required, must be unique and valid)
  - `password` (string, required, minimum 8 characters)

- **Login Fields:**
  - `email` (string, required)
  - `password` (string, required)

- **Process:**
  - Registration and login forms are found in `src/pages/UserRegister.jsx` and `src/pages/UserLogin.jsx`.
  - On successful registration/login, user data is stored in context (`UserDataContext`), and navigation to the home page occurs.

---

### Captain (Driver)

- **Registration Fields:**
  - `firstname` (string, required)
  - `lastname` (string, required)
  - `email` (string, required, must be unique and valid)
  - `password` (string, required, minimum 8 characters)
  - `color` (string, required, vehicle color)
  - `plate` (string, required, vehicle plate number, minimum 8 characters)
  - `type` (string, required, vehicle type: "Car", "Motorcycle", "Auto")
  - `capacity` (number, required, minimum 1)

- **Login Fields:**
  - `email` (string, required)
  - `password` (string, required)

- **Process:**
  - Registration and login forms are found in `src/pages/CaptainRegister.jsx` and `src/pages/CaptainLogin.jsx`.
  - On successful registration/login, captain data is stored in context (`CaptainDataContext`), and navigation to the captain home page occurs.

---

## Google Maps API Integration

### How to Integrate

1. **Get an API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/).
   - Enable the Maps JavaScript API, Geocoding API, and Directions API.
   - Create an API key and add it to your `.env` file as:
     ```
     VITE_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
     ```

2. **Install the Library:**
   ```
   npm install @react-google-maps/api
   ```

3. **Usage in Components:**
   - Use the `<GoogleMap />` component from `@react-google-maps/api` to render maps.
   - Use `<Marker />` to show user/captain/pickup/destination locations.
   - Use `<DirectionsRenderer />` to display routes between points.
   - Geocoding (address to coordinates) is done via backend endpoints using Google Maps Geocoding API.

4. **Example:**
   ```jsx
   import { GoogleMap, Marker, DirectionsRenderer, LoadScript } from "@react-google-maps/api";

   <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
     <GoogleMap center={center} zoom={15} mapContainerStyle={{ width: "100%", height: "100vh" }}>
       <Marker position={userPosition} />
       <DirectionsRenderer directions={directions} />
     </GoogleMap>
   </LoadScript>
   ```

---

## Frontend Routes

| Route                | Component                | Purpose                                                                 |
|----------------------|-------------------------|-------------------------------------------------------------------------|
| `/`                  | `Home`                  | Rider home page, search and book rides                                  |
| `/register`          | `UserRegister`          | Rider registration form                                                 |
| `/login`             | `UserLogin`             | Rider login form                                                        |
| `/captain/register`  | `CaptainRegister`       | Captain registration form                                               |
| `/captain/login`     | `CaptainLogin`          | Captain login form                                                      |
| `/captain/home`      | `CaptainHome`           | Captain dashboard/home page                                             |
| `/ongoing-ride`      | `OngoingRide`           | Shows ongoing ride details and map with route between captain and rider |
| `/ride-details`      | `RideDetails`           | Displays details of a completed or ongoing ride                         |

---

## Notes

- Context providers (`UserDataContext`, `CaptainDataContext`, `RideDataContext`, `AuthContext`) are used for global state management.
- Real-time location updates for captains are handled via sockets.
- All map features require a valid Google Maps API key.

---

## Troubleshooting

- If maps do not render, check your API key and ensure `<LoadScript>` is used only once.
- If registration or login fails, check backend API endpoints and CORS settings.
- For location-based features, ensure browser geolocation permissions are granted.

---

For more details, see the source files in `src/pages` and `src/components`.
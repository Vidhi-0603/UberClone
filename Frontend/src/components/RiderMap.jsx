import React, { useEffect, useState, useRef, useContext } from "react";
import {
  DirectionsRenderer,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { SocketDataContext } from "../context/SocketContext";
import axiosInstance from "../utils/axiosInstance";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const RiderMap = ({
  ride = null,
  user,
  nearbyCaptains = [],
  showCaptains = false,
  captainFound = false,
  pickup = null,
  destination = null,
  isrideStarted = false,
}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [riderPosition, setriderPosition] = useState({
    lat: 28.6139,
    lng: 77.209,
  });
  const { socket } = useContext(SocketDataContext);
  const [driverPosition, setDriverPosition] = useState(null);
  const [pickupCoords, setPickupCoords] = useState(null);
  const [directions, setDirections] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);

  const mapRef = useRef(null);

  useEffect(() => {
    if (!user || !navigator.geolocation) return;

    socket.emit("join", { userId: user._id, userType: "user" });

    const handlePos = (pos) => {
      const lat = Number(pos.coords.latitude);
      const lng = Number(pos.coords.longitude);
      
      // if (pos.coords.accuracy && pos.coords.accuracy > 200) return;
      setriderPosition({ lat, lng });
    };

    const handleErr = (err) => {
      console.error("Geolocation error:", err);
    };

    // Try to get a fresh non-cached position first
    navigator.geolocation.getCurrentPosition(handlePos, handleErr, {
      enableHighAccuracy: true,
      maximumAge: 0, // don't use cached
      timeout: 10000,
    });

    // Then start watching for updates
    const watchId = navigator.geolocation.watchPosition(handlePos, handleErr, {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 10000,
    });

    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId);
    };
  }, [user, socket]);

  useEffect(() => {
    if (ride) {
      console.log(ride);
    }
  }, [ride]);

  useEffect(() => {
    if (pickup && typeof pickup === "string") {
      axiosInstance
        .get("/maps/get-coordinates", { params: { address: pickup } })
        .then((res) => {
          setPickupCoords({
            lat: Number(res.data.ltd),
            lng: Number(res.data.lng),
          }); // <-- fix typo ltd -> lat
        })
        .catch((err) => console.error("Pickup geocode failed:", err));
    } else if (pickup && typeof pickup === "object") {
      setPickupCoords(pickup); // if you already pass {lat, lng}
    }
  }, [pickup]);

  useEffect(() => {
    if (!captainFound || !ride?.captain?.location) return;

    // Fix: Use coordinates array from location object
    const coords = ride.captain.location.coordinates;
    if (Array.isArray(coords)) {
      const [lng, lat] = coords;
      setDriverPosition({ lat: Number(lat), lng: Number(lng) });
      if (isrideStarted && destination) {
        axiosInstance
          .get("/maps/get-coordinates", { params: { address: destination } })
          .then((res) => {
            setDestinationCoords({
              lat: Number(res.data.ltd),
              lng: Number(res.data.lng),
            }); // fixed ltd → lat
          })
          .catch((err) => console.log("Destination geocode failed:", err));
      }
    } else {
      console.warn(
        "ride.captain.location.coordinates is not an array:",
        ride.captain.location.coordinates
      );
    }
  }, [
    captainFound,
    isrideStarted,
    destination,
    ride?.captain?.location,
    JSON.stringify(ride?.captain?.location),
  ]);

  useEffect(() => {
    if (!mapRef.current) return;

    if (!ride && riderPosition) {
      // User has no ride yet → center on themselves
      mapRef.current.panTo(riderPosition);
    } else if (ride && pickupCoords && !isrideStarted) {
      // Ride created but not started → center on pickup location
      mapRef.current.panTo(pickupCoords);
    } else if (ride && isrideStarted && directions) {
      // Ride started → fit map bounds to the route
      const bounds = new window.google.maps.LatLngBounds();
      directions.routes[0].overview_path.forEach((point) => {
        bounds.extend(point);
      });
      mapRef.current.fitBounds(bounds);
    }
  }, [riderPosition, pickupCoords, isrideStarted, ride, directions]);

  useEffect(() => {
    if (!driverPosition || !captainFound) return;
    const directionsService = new window.google.maps.DirectionsService();

    if (!isrideStarted && pickupCoords && captainFound) {
      console.log(
        isrideStarted,
        "ride status",
        pickupCoords,
        "pickupcoords",
        captainFound,
        "captain status"
      );

      directionsService.route(
        {
          origin: driverPosition,
          destination: pickupCoords,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === "OK") {
            setDirections(result);
            if (status === "OK") {
              setDirections(result);
            }
          } else {
            console.error("Directions request failed:", status);
          }
        }
      );
    }

    if (isrideStarted && destinationCoords && captainFound) {
      directionsService.route(
        {
          origin: driverPosition,
          destination: destinationCoords,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === "OK") {
            setDirections(result);
            if (status === "OK") {
              setDirections(result);
            }
          } else {
            console.error("Directions request failed:", status);
          }
        }
      );
    }
  }, [
    driverPosition,
    pickupCoords,
    destinationCoords,
    captainFound,
    isrideStarted,
  ]);

  if (!riderPosition && !pickupCoords) return <p>Loading map...</p>;
  console.log(riderPosition);
  console.log(pickupCoords);
  console.log(driverPosition);
  if (!isLoaded) return <p>Loading map…</p>;

  // if (!ride) return <p>Loading ride...</p>;
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      onLoad={(map) => {
        mapRef.current = map;
      }}
      center={pickupCoords ? pickupCoords : riderPosition}
      zoom={13}
    >
      {!captainFound && !pickupCoords && (
        <Marker
          position={riderPosition}
          label="You"
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          }}
        />
      )}
      {!captainFound && pickupCoords && (
        <Marker
          position={pickupCoords}
          label="hi"
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          }}
        />
      )}
      {showCaptains &&
        !captainFound &&
        nearbyCaptains.map((captain) =>
          captain.location ? (
            <Marker
              key={captain.id}
              position={{ lat: captain.location[1], lng: captain.location[0] }}
              label="Captain"
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
              }}
            />
          ) : null
        )}
      {captainFound && (
        <Marker
          position={pickupCoords}
          label="me"
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          }}
        />
      )}
      {/* {(captainFound && pickupCoords && !isrideStarted) && (
        <Marker
          position={driverPosition}
          label={"captain"}
          // icon={{
          //   url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
          // }}
        />
      )} */}
      {captainFound && destinationCoords && isrideStarted && (
        <Marker
          position={destinationCoords}
          label={"Destination"}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
          }}
        />
      )}
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
};

export default RiderMap;

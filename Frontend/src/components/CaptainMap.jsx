import React, { useEffect, useState, useRef, useContext } from "react";
import {
  DirectionsRenderer,
  GoogleMap,
  Marker,
} from "@react-google-maps/api";
import { SocketDataContext } from "../context/SocketContext";
import axiosInstance from "../utils/axiosInstance";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const CaptainMap = ({
  captain,
  pickup,
  showRoute,
  isrideStarted = false,
  destination = null,
}) => {
  const [driverPosition, setDriverPosition] = useState({
    lat: 28.6139,
    lng: 77.209,
  });
  const lastUpdateRef = useRef(0); // timestamp of last emitted update
  const { socket } = useContext(SocketDataContext); // your backend URL
  const [pickupCoords, setPickupCoords] = useState(null);
  const [directions, setDirections] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);

  const mapRef = useRef(null);

  useEffect(() => {
    if (!captain || !navigator.geolocation) return;

    socket.emit("join", { userId: captain._id, userType: "captain" });

    const handlePos = (pos) => {
      const lat = Number(pos.coords.latitude);
      const lng = Number(pos.coords.longitude);
      console.log(pos.coords.accuracy);
      
      const coords = { lat, lng };
      // if (pos.coords.accuracy && pos.coords.accuracy > 200) return;
      setDriverPosition(coords);

      const now = Date.now();

      // Throttle: update only if 5s passed since last emit
      if (now - lastUpdateRef.current > 5000) {
        socket.emit("update-location-captain", {
          userId: captain._id,
          location: coords,
        });
        lastUpdateRef.current = now;
      }
    };

    const handleErr = (err) => {
      console.error("Geolocation error:", err);
    };

    navigator.geolocation.getCurrentPosition(handlePos, handleErr, {
      enableHighAccuracy: true,
      maximumAge: 0, // don't use cached
      timeout: 10000,
    });

    const watchId = navigator.geolocation.watchPosition(handlePos, handleErr, {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 10000,
    });

    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId);
    };
  }, [socket, captain]);

  useEffect(() => {
    if (pickup && showRoute && typeof pickup === "string") {
      if (!isrideStarted) {
        axiosInstance
          .get("/maps/get-coordinates", { params: { address: pickup } })
          .then((res) => {
            setPickupCoords({ lat: res.data.ltd, lng: res.data.lng });
          })
          .catch((err) => console.log(err));
      } else {
        axiosInstance
          .get("/maps/get-coordinates", { params: { address: destination } })
          .then((res) => {
            setDestinationCoords({ lat: res.data.ltd, lng: res.data.lng });
          })
          .catch((err) => console.log(err));
      }
    } else if (pickup && typeof pickup === "object") {
      setPickupCoords(pickup); // If pickup is already {lat, lng}
    }
  }, [pickup, showRoute, destination, isrideStarted]);

  useEffect(() => {
    if (!driverPosition || !showRoute) {
      setDirections(null);
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();

    if (!isrideStarted && pickupCoords) {
      directionsService.route(
        {
          origin: driverPosition,
          destination: pickupCoords,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
          }
        }
      );
    } else if (isrideStarted && destinationCoords) {
      directionsService.route(
        {
          origin: driverPosition,
          destination: destinationCoords,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
          }
        }
      );
    }
  }, [
    driverPosition,
    pickupCoords,
    destinationCoords,
    showRoute,
    isrideStarted,
  ]);

  useEffect(() => {
    if (!mapRef.current) return;

    if (captain && driverPosition) {
      // User has no ride yet → center on themselves
      mapRef.current.panTo(driverPosition);
    } else if (pickupCoords && !isrideStarted) {
      // Ride created but not started → center on pickup location
      mapRef.current.panTo(pickupCoords);
    } else if (destinationCoords && isrideStarted && directions) {
      // Ride started → fit map bounds to the route
      const bounds = new window.google.maps.LatLngBounds();
      directions.routes[0].overview_path.forEach((point) => {
        bounds.extend(point);
      });
      mapRef.current.fitBounds(bounds);
    }
  }, [driverPosition, pickupCoords, isrideStarted, directions, captain, destinationCoords]);

  if (!driverPosition) return <p>Loading map...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={driverPosition}
      zoom={15}
      onLoad={(map) => {
        mapRef.current = map;
      }}
    >
      {!showRoute && (
        <Marker
          position={driverPosition}
          label="You"
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          }}
        />
      )}
      {pickupCoords && !isrideStarted && (
        <Marker
          position={pickupCoords}
          label={"Pickup"}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
          }}
        />
      )}
      {destinationCoords && isrideStarted && (
        <Marker
          position={destinationCoords}
          label={"Destination"}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
          }}
        />
      )}
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
};

export default CaptainMap;

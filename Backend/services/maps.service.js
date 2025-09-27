import axios from "axios";
import captainModel from "../models/captain.model.js";

export const getAddressCoordinates = async (address) => {
  const api_key = process.env.GOOGLE_MAPS_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${api_key}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      return {
        ltd: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error("Error fetching coordinates");
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getDistanceAndTime = async (origin, destination) => {
  const api_key = process.env.GOOGLE_MAPS_API_KEY;

  const formatLocation = (loc) => {
    if (typeof loc === "string") return encodeURIComponent(loc);
    if (typeof loc === "object" && loc.captainLat && loc.captainLng)
      return `${loc.captainLat},${loc.captainLng}`;
    throw new Error("Invalid location format");
  };

  const originParam = formatLocation(origin);
  const destinationParam = formatLocation(destination);

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${originParam}&destinations=${destinationParam}&key=${api_key}`;
  try {
    const response = await axios.get(url);

    const element = response.data.rows[0].elements[0];

    if (response.data.status === "OK") {
      if (element.status === "ZERO_RESULTS") {
        throw new Error("No route found");
      }
      return {
        distance: element.distance, // { text, value }
        duration: element.duration, // { text, value }
      };
    } else {
      throw new Error("Error fetching distance and time");
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getSuggestions = async (address) => {
  if (!address) {
    throw new Error("query is required");
  }

  const api_key = process.env.GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
    address
  )}&key=${api_key}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      return response.data.predictions
        .map((prediction) => prediction.description)
        .filter((value) => value);
    } else {
      throw new Error("Unable to fetch suggestions");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getCaptainsInTheRadius = async (lng, lat, radius, vehicleType) => {
  // radius in km

  const captains = await captainModel.find({
    location: {
      $geoWithin: {
        $centerSphere: [[lng, lat], radius / 6371],
      },
    },
    "vehicle.vehicleType": vehicleType,
  });

  return captains;
};

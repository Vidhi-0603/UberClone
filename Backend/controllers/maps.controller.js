import captainModel from "../models/captain.model.js";
import {
  getAddressCoordinates,
  getDistanceAndTime,
  getSuggestions,
} from "../services/maps.service.js";
import { validationResult } from "express-validator";

export const getCoordinates = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { address } = req.query;

  try {
    const coordinates = await getAddressCoordinates(address);
    res.status(200).json(coordinates);
  } catch (err) {
    res.status(404).json({ message: "Failed to fetch coordinates" });
  }
};

export const getDistanceTime = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { origin, destination } = req.query;

    const captain = await captainModel.findById(req.captain._id);
    if (!captain) {
      throw new Error("Captain not found!");
    }

    console.log(captain);

    if (!captain.location || !captain.location.coordinates) {
      return res.status(400).json({ message: "Captain location not set" });
    }

    const captainLng = captain.location.coordinates[0];
    const captainLat = captain.location.coordinates[1];

    const pickupDistance = await getDistanceAndTime(
      { captainLat, captainLng },
      origin
    );
    const destinationDistance = await getDistanceAndTime(origin, destination);

    res.status(200).json({
      pickupDistance,
      destinationDistance,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAutoCompleteSuggestions = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { address } = req.query;

    const suggestions = await getSuggestions(address);
    res.status(200).json(suggestions);
  } catch (err) {
    res.status(404).json({ message: `${err}` });
  }
};

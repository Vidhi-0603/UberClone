import express from "express";
import { authCaptain, authUser } from "../middlewares/auth.middleware.js";
const router = express.Router();
import { query } from "express-validator";
import { getAutoCompleteSuggestions, getCoordinates, getDistanceTime } from "../controllers/maps.controller.js";

router.get(
  "/get-coordinates",
  [
    query("address").notEmpty().withMessage("Address is required"),
    query("address")
      .isString()
      .isLength({ min: 5 })
      .withMessage("Address must be 5 characters long"),
  ],
  // authUser,
  getCoordinates
);

router.get(
  "/get-distance-time",
  [
    query("origin").notEmpty().withMessage("Origin address is required"),
    query("origin")
      .isString()
      .isLength({ min: 5 })
      .withMessage("Origin address must be 5 characters long"),
    query("destination")
      .notEmpty()
      .withMessage("destination address is required"),
    query("destination")
      .isString()
      .isLength({ min: 5 })
      .withMessage("destination address must be 5 characters long"),
    
  ],
authCaptain,
  getDistanceTime
);

router.get(
  "/get-suggestions",
  authUser,
  [
    query("address").notEmpty().withMessage("Address is required"),
    query("address")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Address must be 3 characters long"),
  ],
  getAutoCompleteSuggestions
);

export default router;

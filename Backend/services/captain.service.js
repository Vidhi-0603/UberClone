import captainModel from "../models/captain.model.js";

export const createCaptain = async (
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  type
) => {
  if (
    !firstname ||
    !email ||
    !password ||
    !color ||
    !plate ||
    !capacity ||
    !type
  ) {
    throw new Error("All fields are required");
  }

  const newCaptain = new captainModel({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType: type,
    },
  });

  await newCaptain.save();

  return newCaptain;
};

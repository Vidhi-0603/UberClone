import express from 'express';
const app = express();

import cors from 'cors';
import cookieParser from 'cookie-parser';

import connectToDB from './config/mongodb.config.js';
import authRoutes from './routes/user.routes.js';
import captainRoutes from './routes/captain.routes.js';
import authUser from './routes/authUser.routes.js';
import mapRoutes from "./routes/maps.routes.js";
import rideRoutes from "./routes/ride.routes.js"

import dotenv from 'dotenv';
dotenv.config();

connectToDB();

app.use(cookieParser());

const allowedOrigins = [
  "https://uber-clone-kappa-five.vercel.app",
  // "http://localhost:5173/"
  // "https://w7fzrd0s-5173.inc1.devtunnels.ms/",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} took ${duration} ms`);
  });
  next();
});

app.use('/user', authRoutes);
app.use('/captain', captainRoutes);
app.use('/maps', mapRoutes);
app.use('/ride', rideRoutes);

app.use("/me", authUser)

export default app;
import express from 'express';
const router = express.Router();
import { body } from "express-validator";
import { registerCaptain, loginCaptain, getCaptainProfile, logoutCaptain } from '../controllers/captain.controller.js';
import { authCaptain } from '../middlewares/auth.middleware.js';


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    body('plate').isLength({ min: 8 }).withMessage('Plate must be at least 8 characters long'),
    body('capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('type').isIn([ 'Car', 'Motorcycle', 'Auto' ]).withMessage('Invalid vehicle type')
], registerCaptain);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
], loginCaptain);

router.get('/profile', authCaptain, getCaptainProfile);

router.post('/logout', logoutCaptain);

export default router;
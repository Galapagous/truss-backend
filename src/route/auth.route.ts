import authController from "../contoller/auth.controller";
import express from "express";

const router = express.Router();

router.post("/", authController.auth);

export default router;

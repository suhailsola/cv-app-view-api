import { Router } from "express";

const AuthRoutes = Router();

AuthRoutes.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Authenticated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default AuthRoutes;

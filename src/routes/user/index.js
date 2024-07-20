import { Router } from "express";

const UserRoutes = Router();

UserRoutes.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "This is user route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default UserRoutes;

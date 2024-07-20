import { Router } from "express";
import { registerUser } from "../../controllers/auth/registerUser";
import { loginUser } from "../../controllers/auth/loginUser";

const AuthRoutes = Router();

AuthRoutes.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "This is auth route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

AuthRoutes.post("/register", registerUser);
AuthRoutes.post("/login", loginUser);

export default AuthRoutes;

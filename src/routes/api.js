import { Router } from "express";
import AuthRoutes from "./auth";
import UserRoutes from "./user";

const ApiRoutes = Router();

ApiRoutes.use("/auth", AuthRoutes);
ApiRoutes.use("/user", UserRoutes);

export default ApiRoutes;

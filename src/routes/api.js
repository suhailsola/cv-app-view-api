import { Router } from "express";
import AuthRoutes from "./user/auth";

const ApiRoutes = Router();

ApiRoutes.use("/auth", AuthRoutes);

export default ApiRoutes;

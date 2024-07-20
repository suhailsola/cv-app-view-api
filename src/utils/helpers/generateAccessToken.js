import jwt from "jsonwebtoken";
import config from "../../config";

export const generateAccessToken = (userData) => {
  return jwt.sign(userData, config.jwtSecretToken, { expiresIn: "1d" });
};

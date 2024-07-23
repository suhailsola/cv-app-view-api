import jwt from "jsonwebtoken";
import config from "../config";
import { parseMessage } from "../utils/helpers/parseMessage";

export const isAuthenticated = (req, res, next) => {
  const auth_header = req.headers.authorization;
  const token = auth_header && auth_header.split(" ")[1];
  jwt.verify(token, config.jwtSecretToken, (err, user) => {
    if (err) return res.sendStatus(401).json(parseMessage("Unauthorized"));
    req.user = user.id;
    next();
  });
};

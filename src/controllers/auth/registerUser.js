import bcrypt from "bcrypt";
import { parseMessage } from "../../utils/helpers/parseMessage";
import { createUser } from "../../services/auth/createUser";

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const saltRounds = 10;

  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  try {
    const data = await createUser(username, email, hashedPassword);
    res.status(201).json(parseMessage("User is created", data));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

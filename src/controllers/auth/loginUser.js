import prisma from "../../services";
import bcrypt from "bcrypt";
import { parseMessage } from "../../utils/helpers/parseMessage";
import { generateAccessToken } from "../../utils/helpers/generateAccessToken";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const data = await prisma.users.findFirst({ where: { email: email } });
    if (!data) res.status(401).json(parseMessage("User not found"));
    if (!bcrypt.compareSync(password, data.password)) {
      return res.status(401).json(parseMessage("Wrong credentials"));
    }
    const token = generateAccessToken({
      id: data.id,
      username: data.username,
      email: data.email,
      is_admin: data.is_admin,
    });
    res
      .status(200)
      .json(parseMessage("Login successful", { data, jwt: token }));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const getSocial = async (req, res) => {
  const id = req.user;
  try {
    const data = await prisma.socials.findUnique({
      where: { user_id: Number(id) },
    });
    res.status(201).json(parseMessage("New social created", data));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

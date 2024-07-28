import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const updateSocial = async (req, res) => {
  const socials = req.body;
  const id = req.user;
  try {
    const data = await prisma.socials.update({
      where: { user_id: Number(id) },
      data: socials,
    });
    res.status(200).json(parseMessage("User socials updated", data));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

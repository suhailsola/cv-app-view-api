import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const getCV = async (req, res) => {
  const id = req.user;
  try {
    const data = await prisma.users.findUnique({
      where: { id: Number(id) },
      include: {
        profile: true,
        education: true,
        career: true,
        skill: true,
      },
    });
    const socials = await prisma.socials.findUnique({
      where: { user_id: Number(id) },
    });
    res.status(200).json(parseMessage("User CV", { ...data, socials }));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

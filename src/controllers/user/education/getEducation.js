import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const getEducation = async (req, res) => {
  const id = req.user;
  try {
    const data = await prisma.educations.findMany({
      where: { user_id: Number(id) },
    });
    res.status(200).json(parseMessage("User educations", data));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

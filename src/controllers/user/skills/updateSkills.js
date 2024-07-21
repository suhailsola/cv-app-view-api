import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const updateSkills = async (req, res) => {
  const skills = req.body;
  const id = req.params.id;
  try {
    const data = await prisma.skills.update({
      where: { id: Number(id) },
      data: skills,
    });
    res.status(200).json(parseMessage("User skills updated", data));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

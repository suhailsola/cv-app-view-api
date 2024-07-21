import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const deleteSkills = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await prisma.skills.delete({
      where: { id: Number(id) },
    });
    res.status(200).json(parseMessage("User skills deleted", data));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

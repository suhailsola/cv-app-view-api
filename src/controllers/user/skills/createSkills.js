import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const createSkills = async (req, res) => {
  const skills = req.body;
  if (Object.keys(skills).length === 0) {
    return res.status(400).json(parseMessage("Skills data is required"));
  }
  try {
    const data = await prisma.skills.create({
      data: {
        ...skills,
        user_id: Number(skills.user_id),
      },
    });
    res.status(201).json(parseMessage("New skills created", data));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

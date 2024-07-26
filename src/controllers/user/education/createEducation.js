import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const createEducation = async (req, res) => {
  const education = req.body;
  const id = req.user;
  if (Object.keys(education).length === 0) {
    return res.status(400).json({ message: "Education data is required" });
  }
  try {
    const data = await prisma.educations.create({
      data: {
        ...education,
        user_id: Number(id),
        start_year: Number(education.start_year),
        end_year: education.end_year ? Number(education.end_year) : null,
      },
    });
    res.status(201).json(parseMessage("New education created", data));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

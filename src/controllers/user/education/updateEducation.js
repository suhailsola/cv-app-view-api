import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const updateEducation = async (req, res) => {
  const education = req.body;
  const id = req.params.id;
  const user_id = req.user;
  try {
    const data = await prisma.educations.update({
      where: { id: Number(id) && { user_id: Number(user_id) } },
      data: {
        ...education,
        ...(education.start_year && {
          start_year: Number(education.start_year),
        }),
        ...(education.end_year && {
          end_year: Number(education.end_year),
        }),
      },
    });
    res.status(200).json(parseMessage("User education updated", data));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

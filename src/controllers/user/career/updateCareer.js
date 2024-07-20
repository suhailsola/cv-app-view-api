import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const updateCareer = async (req, res) => {
  const career = req.body;
  const id = req.params.id;
  try {
    const data = await prisma.careers.update({
      where: { id: Number(id) },
      data: {
        ...career,
        ...(career.start_year && {
          start_year: Number(career.start_year),
        }),
        ...(career.end_year && {
          end_year: Number(career.end_year),
        }),
        ...(career.start_month && {
          start_month: Number(career.start_month),
        }),
        ...(career.end_month && {
          end_month: Number(career.end_month),
        }),
      },
    });
    res.status(200).json(parseMessage("User career updated", data));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

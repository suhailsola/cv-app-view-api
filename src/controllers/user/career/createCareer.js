import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const createCareer = async (req, res) => {
  const career = req.body;
  const id = req.user;
  if (Object.keys(career).length === 0) {
    return res.status(400).json(parseMessage("Career data is required"));
  }
  try {
    const data = await prisma.careers.create({
      data: {
        ...career,
        user_id: Number(id),
        start_year: Number(career.start_year),
        start_month: Number(career.start_month),
        end_year: career.end_year ? Number(career.end_year) : null,
        end_month: career.end_month ? Number(career.end_month) : null,
      },
    });
    res.status(201).json(parseMessage("New career created", data));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

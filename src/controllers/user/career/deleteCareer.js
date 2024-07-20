import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const deleteCareer = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await prisma.careers.delete({
      where: { id: Number(id) },
    });
    res.status(200).json(parseMessage("User career deleted", data));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const deleteCareer = async (req, res) => {
  const id = req.params.id;
  const user_id = req.user;
  try {
    const data = await prisma.careers.delete({
      where: { id: Number(id) && { user_id: Number(user_id) } },
    });
    res.status(200).json(parseMessage("User career deleted", data));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

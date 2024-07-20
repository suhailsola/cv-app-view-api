import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const updateUserProfile = async (req, res) => {
  const profile = req.body;
  const id = req.params.id;

  try {
    const data = await prisma.profiles.update({
      where: { id: Number(id) },
      data: profile,
    });

    res.status(200).json(parseMessage("User profile updated", data));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

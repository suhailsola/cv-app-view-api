import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const getUserProfile = async (req, res) => {
  const id = req.user;
  // || req.params.id;
  try {
    const profile = await prisma.profiles.findUnique({
      where: { user_id: Number(id) },
    });

    if (profile) {
      res.status(200).json(parseMessage("User profile", profile));
    } else {
      res.status(404).json(parseMessage("User profile not found"));
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

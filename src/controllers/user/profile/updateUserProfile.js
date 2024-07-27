import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const updateUserProfile = async (req, res) => {
  const profile = req.body;
  const id = req.user;
  // const id = req.params.id;

  // Convert date format
  const profileDate = new Date(profile.birth_date);
  profile.birth_date = profileDate.toISOString();
  //
  try {
    const data = await prisma.profiles.update({
      where: { user_id: Number(id) },
      data: profile,
    });

    res.status(200).json(parseMessage("User profile updated", data));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

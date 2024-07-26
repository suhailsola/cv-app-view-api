import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const createUserProfile = async (req, res) => {
  const profile = req.body;
  const id = req.user;
  // Convert date format
  const profileDate = new Date(profile.birth_date);
  profile.birth_date = profileDate.toISOString();
  //
  profile.user_id = Number(id);

  try {
    if (Object.keys(profile).length === 0) {
      return res.status(400).json({ message: "Profile data is required" });
    }
    const data = await prisma.profiles.create({ data: profile });
    res.status(201).json(parseMessage("User profile is created", data));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

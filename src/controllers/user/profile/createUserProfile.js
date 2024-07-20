import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const createUserProfile = async (req, res) => {
  const profile = req.body;

  // Convert date format
  const dateString = profile.birth_date;
  const [day, month, year] = dateString.split("/").map(Number);
  const convertDate = new Date(year, month - 1, day);
  profile.birth_date = convertDate.toISOString();
  //
  if (Object.keys(profile).length === 0) {
    return res.status(400).json({ message: "Profile data is required" });
  }
  try {
    const data = await prisma.profiles.create({ data: profile });
    res.status(201).json(parseMessage("User profile is created", data));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

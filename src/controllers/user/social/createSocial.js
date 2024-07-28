import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const createSocial = async (req, res) => {
    const social = req.body;
    const id = req.user;
    if (Object.keys(social).length === 0) {
        return res.status(400).json(parseMessage("Social data is required"));
    }
    try {
        const data = await prisma.socials.create({
            data: {
                ...social,
                user_id: Number(id),
            },
        });
        res.status(201).json(parseMessage("New social created", data));
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}
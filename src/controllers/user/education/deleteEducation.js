import prisma from "../../../services";
import { parseMessage } from "../../../utils/helpers/parseMessage";

export const deleteEducation = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await prisma.educations.delete({
            where: { id: Number(id) },
        });
        res.status(200).json(parseMessage("User education deleted", data));
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}
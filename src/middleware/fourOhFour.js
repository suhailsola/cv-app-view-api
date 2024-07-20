/**
 * JSON 404 response
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const fourOhFour = (req, res) => {
  return res.status(404).json({ message: "Not found" });
};

export default fourOhFour;

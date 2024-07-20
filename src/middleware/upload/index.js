import { upload } from "../../utils/multer";

export const handleMultipartData = (req, res, next) => {
  upload.single("file")(req, res, (err) => {
    if (err) {
      return res.status(400).json(parseMessage(err.message));
    }
    if (req.body.jsonData) {
      try {
        req.body = JSON.parse(req.body.jsonData);
      } catch (error) {
        return res.status(400).json(parseMessage(error.message));
      }
    }
    next();
  });
};

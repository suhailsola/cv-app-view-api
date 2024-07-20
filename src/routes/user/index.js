import { Router } from "express";
import { createUserProfile } from "../../controllers/user/profile/createUserProfile";
import { updateUserProfile } from "../../controllers/user/profile/updateUserProfile";
import { createEducation } from "../../controllers/user/education/createEducation";
import { updateEducation } from "../../controllers/user/education/updateEducation";
import { deleteEducation } from "../../controllers/user/education/deleteEducation";
import { createCareer } from "../../controllers/user/career/createCareer";
import { updateCareer } from "../../controllers/user/career/updateCareer";
import { deleteCareer } from "../../controllers/user/career/deleteCareer";

const UserRoutes = Router();

UserRoutes.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "This is user route" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Profile
UserRoutes.post("/", createUserProfile);
UserRoutes.patch("/:id", updateUserProfile);

// Education
UserRoutes.post("/edu", createEducation);
UserRoutes.patch("/edu/:id", updateEducation);
UserRoutes.delete("/edu/:id", deleteEducation);

// Career
UserRoutes.post("/career", createCareer);
UserRoutes.patch("/career/:id", updateCareer);
UserRoutes.delete("/career/:id", deleteCareer);

// Skills
export default UserRoutes;

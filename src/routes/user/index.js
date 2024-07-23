import { Router } from "express";
import { createUserProfile } from "../../controllers/user/profile/createUserProfile";
import { updateUserProfile } from "../../controllers/user/profile/updateUserProfile";
import { createEducation } from "../../controllers/user/education/createEducation";
import { updateEducation } from "../../controllers/user/education/updateEducation";
import { deleteEducation } from "../../controllers/user/education/deleteEducation";
import { createCareer } from "../../controllers/user/career/createCareer";
import { updateCareer } from "../../controllers/user/career/updateCareer";
import { deleteCareer } from "../../controllers/user/career/deleteCareer";
import { createSkills } from "../../controllers/user/skills/createSkills";
import { updateSkills } from "../../controllers/user/skills/updateSkills";
import { deleteSkills } from "../../controllers/user/skills/deleteSkills";
import { getUserProfile } from "../../controllers/user/profile/getUserProfile";
import { isAuthenticated } from "../../middleware/isAuthenticated";

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
UserRoutes.get("/:id", isAuthenticated, getUserProfile);
UserRoutes.post("/", isAuthenticated, createUserProfile);
UserRoutes.patch("/:id", isAuthenticated, updateUserProfile);

// Education
UserRoutes.post("/edu", createEducation);
UserRoutes.patch("/edu/:id", updateEducation);
UserRoutes.delete("/edu/:id", deleteEducation);

// Career
UserRoutes.post("/career", createCareer);
UserRoutes.patch("/career/:id", updateCareer);
UserRoutes.delete("/career/:id", deleteCareer);

// Skills
UserRoutes.post("/skills", createSkills);
UserRoutes.patch("/skills/:id", updateSkills);
UserRoutes.delete("/skills/:id", deleteSkills);
export default UserRoutes;

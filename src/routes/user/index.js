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
import { getEducation } from "../../controllers/user/education/getEducation";
import { getCareer } from "../../controllers/user/career/getCareer";

const UserRoutes = Router();

// Profile
UserRoutes.get("/", isAuthenticated, getUserProfile);
UserRoutes.post("/", isAuthenticated, createUserProfile);
UserRoutes.patch("/", isAuthenticated, updateUserProfile);

// Education
UserRoutes.get("/edu", isAuthenticated, getEducation);
UserRoutes.post("/edu", isAuthenticated, createEducation);
UserRoutes.patch("/edu/:id", isAuthenticated, updateEducation);
UserRoutes.delete("/edu/:id", isAuthenticated, deleteEducation);

// Career
UserRoutes.get("/career", isAuthenticated, getCareer);
UserRoutes.post("/career", isAuthenticated, createCareer);
UserRoutes.patch("/career/:id", isAuthenticated, updateCareer);
UserRoutes.delete("/career/:id", isAuthenticated, deleteCareer);

// Skills
UserRoutes.get("/skills", isAuthenticated, createSkills);
UserRoutes.post("/skills", isAuthenticated, createSkills);
UserRoutes.patch("/skills/", isAuthenticated, updateSkills);
UserRoutes.delete("/skills/", isAuthenticated, deleteSkills);
export default UserRoutes;

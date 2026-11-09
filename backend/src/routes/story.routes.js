import { Router } from "express";
import { createStory, listStories, getStory, deleteStory, branchStory } from "../controllers/story.controller.js";
const router = Router();
router.route("/").get(listStories).post(createStory);
router.get("/:id", getStory);
router.delete("/:id", deleteStory);
router.post("/:id/branch", branchStory);
export default router;

import { Router } from "express";
import { createStory, listStories, getStory, deleteStory, branchStory } from "../controllers/story.controller.js";
import { asyncHandler } from "../utils/async-handler.js";
const router = Router();
router.route("/").get(asyncHandler(listStories)).post(asyncHandler(createStory));
router.get("/:id", asyncHandler(getStory));
router.delete("/:id", asyncHandler(deleteStory));
router.post("/:id/branch", asyncHandler(branchStory));
export default router;

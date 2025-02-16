import express from "express"
import { createPoll, getPoll, votePoll } from "../controllers/poll.controller.js";


const router = express.Router();

//end point for create poll
router.post("/polls", createPoll)
//endpoing for get poll
router.get("/polls", getPoll)
//endpoint for vote
router.post("/:id/vote", votePoll)

export default router



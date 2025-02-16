import { Poll } from "../models/poll.model.js";

//create poll question
export const createPoll = async (req, res) => {
    const { question, options } = req.body;
    const poll = new Poll({ question, options: options.map(text => ({ text, votes: 0 })) });
    await poll.save();
    res.json(poll);
};


export const getPoll = async (req, res) => {
    try {
        const polls = await Poll.find().sort({ createdAt: -1 });

        if (!polls || polls.length === 0) {
            return res.status(404).json({ message: "No polls found" });
        }

        res.status(200).json(polls);
    } catch (error) {
        console.error("Error fetching polls:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


// Vote on a poll
export const votePoll =  async (req, res) => {
    const { optionIndex } = req.body;
    const poll = await Poll.findById(req.params.id);
    if (!poll) return res.status(404).json({ error: "Poll not found" });

    poll.options[optionIndex].votes += 1;
    await poll.save();
    res.json(poll);
};
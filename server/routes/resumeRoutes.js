const express = require("express");
const router = express.Router();
const analyzeResume = require("../services/analyzeResume");
const upload = require("../utils/upload");
const extractText = require("../utils/extractText");
const scoreResume = require("../services/scoreResume");

const generateFeedback = require("../services/generateFeedback");
router.post("/upload", upload.single("resume"), async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            });
        }

        // Extract text from uploaded PDF
        const text = await extractText(req.file.path);

        console.log("========== RESUME TEXT ==========");
        console.log(text);
        console.log("=================================");
        const analysis = analyzeResume(text);

        const score = scoreResume(analysis);

        const feedback = generateFeedback(analysis);

        res.json({
            success: true,
            score,
            strengths: feedback.strengths,
            improvements: feedback.improvements
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to process resume"
        });
    }
});
module.exports = router;
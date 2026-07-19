const express = require("express");
const cors = require("cors");

const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

app.use(cors({ origin: "https://resume-analyzer-i5clan014-sambhav180821-1388s-projects.vercel.app" }));
app.use(express.json());

// Routes
app.use("/api", resumeRoutes);

app.get("/", (req, res) => {
    res.send("Resume Analyzer API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const fs = require("fs");
const pdf = require("pdf-parse");

async function extractText(filePath) {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const data = await pdf(dataBuffer);
        return data.text;
    } catch (error) {
        console.error("Error extracting text:", error);
        throw error;
    }
}

module.exports = extractText;

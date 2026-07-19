function analyzeResume(text) {
    const resumeText = text.toLowerCase();

    // ===== Skill Database =====
    const skillDatabase = [
        "python", "java", "c", "c++", "javascript", "typescript",
        "react", "node", "express", "mongodb", "mysql", "sql",
        "html", "css", "tailwind", "bootstrap",
        "git", "github", "docker", "aws",
        "firebase", "flask", "fastapi", "machine learning",
        "tensorflow", "pandas", "numpy", "scikit-learn"
    ];

    // ===== Action Verbs =====
    const actionWords = [
        "developed",
        "built",
        "implemented",
        "created",
        "designed",
        "optimized",
        "engineered",
        "deployed"
    ];

    // ===== Detect Skills =====
    const foundSkills = skillDatabase.filter(skill =>
        resumeText.includes(skill)
    );

    // ===== Detect Action Words =====
    const foundActions = actionWords.filter(word =>
        resumeText.includes(word)
    );

    // ===== Contact Info =====
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;

    const phoneRegex = /(\+?\d{1,3}[- ]?)?\d{10}/;

    // ===== Detect Links =====
    const hasGithub = resumeText.includes("github");

    const hasLinkedin = resumeText.includes("linkedin");

    // ===== Certifications =====
    const hasCertification =
        resumeText.includes("certification") ||
        resumeText.includes("certifications") ||
        resumeText.includes("certificate");

    // ===== Experience =====
    const hasExperience =
        resumeText.includes("experience") ||
        resumeText.includes("intern") ||
        resumeText.includes("internship");

    // ===== Projects =====
    let projectCount = 0;

    if (resumeText.includes("projects"))
        projectCount++;

    projectCount += foundActions.length;

    return {

        hasEmail: emailRegex.test(text),

        hasPhone: phoneRegex.test(text),

        hasEducation:
            resumeText.includes("education") ||
            resumeText.includes("b.tech") ||
            resumeText.includes("btech") ||
            resumeText.includes("bachelor") ||
            resumeText.includes("master"),

        hasSkills: foundSkills.length >= 3,

        skillCount: foundSkills.length,

        foundSkills,

        hasProjects: projectCount >= 2,

        projectCount,

        hasGithub,

        hasLinkedin,

        hasCertification,

        hasExperience,

        actionWordCount: foundActions.length

    };
}

module.exports = analyzeResume;
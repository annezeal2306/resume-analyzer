function scoreResume(report) {

    let score = 0;

    // Contact Information (10)
    if(report.hasEmail) score += 5;
    if(report.hasPhone) score += 5;

    // Education (10)
    if(report.hasEducation)
        score += 10;

    // Skills (20)
    if(report.skillCount >= 10)
        score += 20;
    else if(report.skillCount >= 7)
        score += 16;
    else if(report.skillCount >= 5)
        score += 12;
    else if(report.skillCount >= 3)
        score += 8;
    else if(report.skillCount >= 1)
        score += 4;

    // Projects (20)
    if(report.projectCount >= 4)
        score += 20;
    else if(report.projectCount >= 3)
        score += 16;
    else if(report.projectCount >= 2)
        score += 12;
    else if(report.projectCount >= 1)
        score += 8;

    // Experience (15)
    if(report.hasExperience)
        score += 15;

    // Professional Profiles (10)
    if(report.hasGithub)
        score += 5;

    if(report.hasLinkedin)
        score += 5;

    // Certifications (5)
    if(report.hasCertification)
        score += 5;

    // Resume Quality (10)
    if(report.actionWordCount >= 8)
        score += 10;
    else if(report.actionWordCount >= 5)
        score += 8;
    else if(report.actionWordCount >= 3)
        score += 5;
    else if(report.actionWordCount >= 1)
        score += 2;

    return Math.min(score, 100);
}

module.exports = scoreResume;
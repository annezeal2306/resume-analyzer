function generateFeedback(report){

    const strengths = [];
    const improvements = [];

    if(report.hasEmail)
        strengths.push("Professional email found.");
    else
        improvements.push("Add an email address.");

    if(report.hasPhone)
        strengths.push("Phone number available.");
    else
        improvements.push("Add a phone number.");

    if(report.hasEducation)
        strengths.push("Education section present.");
    else
        improvements.push("Add an Education section.");

    if(report.hasSkills)
        strengths.push("Skills section found.");
    else
        improvements.push("Add a Skills section.");

    if(report.hasProjects)
        strengths.push("Projects included.");
    else
        improvements.push("Include at least 2 projects.");

    return {
        strengths,
        improvements
    };
}

module.exports = generateFeedback;
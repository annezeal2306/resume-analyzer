\# 📄 Resume Analyzer



A full-stack Resume Analyzer that evaluates PDF resumes using a custom ATS (Applicant Tracking System) scoring methodology. The application extracts resume text, analyzes important resume sections, calculates an ATS score, and provides personalized feedback to help improve employability.



\---



\## 🚀 Features



\- Upload resumes in PDF format

\- Extract text from uploaded resumes

\- Custom ATS scoring (0–100)

\- Detects:

&#x20; - Contact Information

&#x20; - Education

&#x20; - Technical Skills

&#x20; - Projects

&#x20; - Experience

&#x20; - GitHub Profile

&#x20; - LinkedIn Profile

&#x20; - Certifications

\- Highlights resume strengths

\- Suggests areas for improvement

\- Modern React dashboard with ATS score visualization



\---



\## 🛠 Tech Stack



\### Frontend

\- React

\- TypeScript

\- Vite

\- Axios

\- React Circular Progressbar

\- CSS



\### Backend

\- Node.js

\- Express.js

\- Multer

\- pdf-parse



\---



\## 📂 Project Structure



```

Resume-Analyzer

│

├── client

│   ├── src

│   ├── App.tsx

│   └── App.css

│

├── server

│   ├── routes

│   ├── services

│   ├── utils

│   ├── uploads

│   └── app.js

│

└── README.md

```



\---



\## ⚙ Installation



\### Clone Repository



```bash

git clone https://github.com/yourusername/resume-analyzer.git

```



\---



\### Backend



```bash

cd server



npm install



npm start

```



Server runs on:



```

http://localhost:5000

```



\---



\### Frontend



```bash

cd client



npm install



npm run dev

```



Application runs on:



```

http://localhost:5173

```



\---



\## 📋 ATS Scoring Methodology



The ATS score is calculated using a custom rule-based evaluation instead of relying solely on AI.



| Category | Weight |

|-----------|--------|

| Contact Information = 10 |

| Education = 10 |

| Technical Skills = 20 |

| Projects = 20 |

| Experience = 15 |

| GitHub \& LinkedIn = 10 |

| Certifications = 5 |

| Resume Quality (Action Verbs) = 10 |

| \*\*Total\*\* | \*\*100\*\* |



The score is computed by evaluating each category independently and summing the weighted scores.



\---



\## 🔍 Resume Analysis



The analyzer performs the following checks:



\- Email detection

\- Phone number detection

\- Education section detection

\- Technical skill extraction

\- Project detection

\- Internship/Experience detection

\- GitHub profile detection

\- LinkedIn profile detection

\- Certification detection

\- Action verb detection



\---



\## 📊 Output



After analyzing a resume, the application provides:



\- ATS Score

\- Resume Strengths

\- Areas for Improvement

\- Personalized Recommendations



\---



\## 🔮 Future Improvements



\- Resume keyword matching against job descriptions

\- OCR support for scanned resumes

\- Export analysis as PDF

\- Authentication and user history

\- Drag-and-drop resume upload

\- Resume comparison



\---



\## 👨‍💻 Author



\*\*Sambhav Shadangi\*\*



GitHub:

https://github.com/annezeal2306



LinkedIn:

https://www.linkedin.com/in/sambhav-shadangi/



\---


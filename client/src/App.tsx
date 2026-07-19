import { useState } from "react";
import axios from "axios";
import "./App.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Result {
  success: boolean;
  score: number;
  strengths: string[];
  improvements: string[];
}

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a resume.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);

      const response = await axios.post<Result>(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="container">
    <div className="card">

      <h1>📄 Resume Analyzer</h1>
      <p>Upload your resume and receive an ATS evaluation.</p>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
      />

      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

      {result && (
        <>
          <div className="score-card">

            <div className="circle">
              <CircularProgressbar
                value={result.score}
                text={`${result.score}%`}
                styles={buildStyles({
                  textSize: "18px",
                })}
              />
            </div>

            <div>
              <h2>ATS Score</h2>
              <h3>{result.score}/100</h3>
            </div>

          </div>

          <div className="grid">

            <div className="box">
              <h3>💪 Strengths</h3>

              <ul>
                {result.strengths.map((item, index) => (
                  <li key={index}>✅ {item}</li>
                ))}
              </ul>
            </div>

            <div className="box">
              <h3>⚠ Areas for Improvement</h3>

              <ul>
                {result.improvements.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

          </div>

        </>
      )}
    </div>
  </div>
);
}

export default App;
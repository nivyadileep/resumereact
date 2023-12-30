import React, { useRef } from "react";
import Resume from "./components/resume/resume";
import html2pdf from 'html2pdf.js';

function App() {
  const pdfRef= useRef();

  const generatePdf = () => {
    const input = pdfRef.current;
    const options = {
      margin: 4,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    html2pdf(input, options);
  }

  

  return (
    <div
      style={{
        backgroundColor: "#282C35",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 20,
        }}
      >
        <div id="divToPrint"  ref={pdfRef} style={{ width: "90%" }}>
          <Resume />
        </div>
        <div
          style={{
            width: "40%",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            fontSize: 20,
            paddingTop: "60px",
            color: "#fff",
            fontWeight: '700'
          }}
        >
          Download the Resume now
          <button
            style={{
              width: "200px",
              height: "50px",
              fontSize: "20px",
              marginTop: "20px",
            }}
            onClick={generatePdf}
          >
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

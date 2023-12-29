import React, { useRef } from "react";
import Resume from "./components/resume/resume";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function App() {
  const pdfRef= useRef();

  const generatePdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm','a4', true);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight);
    const imgX = 0;
    const imgY = 0;
    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    pdf.save('resume.pdf');
    });
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
        <div id="divToPrint"  ref={pdfRef} style={{ width: "80%" }}>
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

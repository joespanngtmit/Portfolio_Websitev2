import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload } from "react-icons/fi"; // Import Download Icon
import "./Resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(1);
  const resumeFile = `${process.env.PUBLIC_URL}/Rohan_Goyal2.pdf`;

  // Flip animation variants
  const flipVariants = {
    enter: (direction) => ({
      opacity: 0,
      rotateY: direction === 1 ? 90 : -90,
    }),
    center: {
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      rotateY: direction === 1 ? -90 : 90,
    }),
  };

  return (
    <div className="resume-container">
      <h1 className="resume-title">My Resume</h1>

      {/* PDF Viewer */}
      <div className="pdf-container">
        <Document
          file={resumeFile}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          className="pdf-document"
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={flipVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flip-page"
            >
              <Page pageNumber={currentPage} />
            </motion.div>
          </AnimatePresence>
        </Document>

        {/* Download Button */}
        <a href={resumeFile} download="Rohan_Goyal_Resume.pdf" className="download-btn">
          <FiDownload />
        </a>
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => {
            setDirection(-1);
            setCurrentPage((prev) => prev - 1);
          }}
          disabled={currentPage <= 1}
        >
          Previous Page
        </button>

        <span>
          Page {currentPage} of {numPages}
        </span>

        <button
          onClick={() => {
            setDirection(1);
            setCurrentPage((prev) => prev + 1);
          }}
          disabled={currentPage >= numPages}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Resume;

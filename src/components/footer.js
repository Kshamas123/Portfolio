import React from 'react';
import './footer.css'
export default function Footer() {
  return (
    <footer className="animated-footer">
      {/* Social Links Section */}
      <section>
        <a
          href="https://www.linkedin.com/in/kshama-s-/"
          className="social-link"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/Kshamas123"
          className="social-link"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
      </section>

      {/* Download Resume Button */}
      <div style={{ margin: '20px 0' }}>
        <a
          href="/kshama_resume (2).pdf" // This references the file in the public folder
          download="Kshama_resume.pdf" // Suggested filename for download
          className="resume-download-button"
        >
          Download Resume
        </a>
      </div>

      {/* Footer Text */}
      <div className="animated-footer-text">DEVELOPED BY KSHAMA.S</div>
    </footer>
  );
}


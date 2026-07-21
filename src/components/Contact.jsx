import React, { useState } from 'react';
import Modal from './Modal';

const Contact = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section id="contact" className="fade-in" style={{ borderBottom: 'none' }}>
      <h2 className="section-title">Contact</h2>
      <div className="hero-links" style={{ justifyContent: 'flex-start', flexWrap: 'wrap', marginTop: 0 }}>
        <a href="mailto:ranaaliahsan7860@gmail.com" className="btn interactive">Email</a>
        <a href="https://linkedin.com/in/aliahsan08" target="_blank" rel="noopener noreferrer" className="btn interactive">LinkedIn</a>
        <a href="https://github.com/aliahsan08" target="_blank" rel="noopener noreferrer" className="btn interactive">GitHub</a>
        <button onClick={() => setResumeOpen(true)} className="btn interactive">Resume</button>
      </div>

      <Modal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        pdfUrl="/resume/Ali%20Ahsan.pdf"
        title="Ali Ahsan - Resume"
      />
    </section>
  );
};

export default Contact;

import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const Hero = () => {
  const roles = ["Data Scientist", "AI/ML Engineer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    let timeout;
    const currentRole = roles[currentRoleIndex];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 100);
    }

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <section className="hero fade-in">
      <h1 className="hero-title">Ali Ahsan</h1>
      <h2 className="hero-subtitle mono">
        &gt; <span className="role-text">{displayText}</span>
      </h2>
      <div className="card interactive" style={{ border: 'none', padding: 0, backgroundColor: 'transparent', backdropFilter: 'none', maxWidth: '800px', marginBottom: '1rem' }}>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          Data Science Student @ NUST<br />
          Mainly developing AI systems and working with Data Pipelines for statistical/inferential analytics and predictive modeling
        </p>
      </div>
      <div className="hero-links">
        <a href="#contact" className="btn interactive">Contact</a>
        <button onClick={() => setResumeOpen(true)} className="btn interactive">Resume</button>
        <a href="https://github.com/aliahsan08" target="_blank" rel="noopener noreferrer" className="btn interactive">GitHub</a>
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

export default Hero;

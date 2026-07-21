import React from 'react';

const Education = () => {
  return (
    <section id="education" className="fade-in">
      <h2 className="section-title">Education</h2>
      
      <div className="card interactive">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div>
            <h3 className="card-title">National University of Science and Technology (NUST)</h3>
            <p className="card-subtitle">Bachelor of Science in Data Science</p>
          </div>
          <div className="mono" style={{ color: 'var(--text-secondary)' }}>
            Islamabad, Pakistan | 09/2024 – Present
          </div>
        </div>
        
        <div style={{ marginTop: '2rem' }}>
          <h4 className="card-title" style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Extracurricular Activities</h4>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginTop: '1rem' }}>
            <div>
              <div style={{ fontWeight: '600', color: 'var(--accent-color)' }}>Google Developer Groups on Campus (GDGoC)</div>
              <div className="card-subtitle" style={{ marginBottom: '0.5rem' }}>Co-Lead</div>
            </div>
            <div className="mono" style={{ color: 'var(--text-secondary)' }}>
              09/2025 - Present
            </div>
          </div>
          <div className="list-item">Organized 3+ technical workshops, events, and community sessions</div>
          <div className="list-item">Led the Finance and HR departments throughout the tenure.</div>
          <div className="list-item">Collaborated with speakers to deliver industry relevant technical content</div>
        </div>
      </div>
    </section>
  );
};

export default Education;

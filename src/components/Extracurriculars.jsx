import React from 'react';

const Extracurriculars = () => {
  return (
    <section id="extracurriculars" className="fade-in">
      <h2 className="section-title">Extracurriculars</h2>
      <div className="card interactive">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div>
            <h3 className="card-title">Google Developers Group on Campus (GDGoC)</h3>
            <p className="card-subtitle">Co-Lead</p>
          </div>
          <div className="mono" style={{ color: 'var(--text-secondary)' }}>
            NUST | 09/2025 - Present
          </div>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <div className="list-item">Organized various technical workshops, events, and community sessions</div>
          <div className="list-item">Led the Finance and HR departments throughout the tenure.</div>
          <div className="list-item">Collaborated with speakers to deliver industry relevant technical content</div>
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;

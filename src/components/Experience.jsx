import React from 'react';
import ExpandableList from './ExpandableList';

const Experience = () => {
  return (
    <section id="experience" className="fade-in">
      <h2 className="section-title">Experience & Involvement</h2>
      <ExpandableList initialCount={3}>
        <div className="card interactive">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div>
              <h3 className="card-title">Zapply</h3>
              <p className="card-subtitle">Product QA Intern</p>
            </div>
            <div className="mono" style={{ color: 'var(--text-secondary)' }}>
              Remote | 03/2026 – Present
            </div>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <div className="list-item">Improved product quality by testing web apps, job boards, and an autofill extension, hence eliminating bugs</div>
            <div className="list-item">Enhanced extension reliability by identifying edge cases across browsers and platforms</div>
            <div className="list-item">Accelerated development cycles by delivering clear, actionable bug reports from structured evaluation</div>
          </div>
        </div>

      </ExpandableList>
    </section>
  );
};

export default Experience;

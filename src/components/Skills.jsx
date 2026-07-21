import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="fade-in">
      <h2 className="section-title">Skills</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        <div className="card interactive" style={{ marginBottom: 0 }}>
          <h3 className="card-title" style={{ fontSize: '1.2rem' }}>ML / Deep Learning</h3>
          <div className="tags" style={{ gap: '0.5rem' }}>
            {['Machine Learning', 'Deep Learning', 'Generative AI', 'LLMs', 'Statistical Analysis', 'LightFM'].map((skill, index) => (
              <span key={index} className="tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="card interactive" style={{ marginBottom: 0 }}>
          <h3 className="card-title" style={{ fontSize: '1.2rem' }}>RAG & Retrieval</h3>
          <div className="tags" style={{ gap: '0.5rem' }}>
            {['Agentic RAG', 'Vector Search', 'FAISS', 'Qdrant', 'BM25', 'LangGraph', 'NLP', 'SentenceTransformers'].map((skill, index) => (
              <span key={index} className="tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="card interactive" style={{ marginBottom: 0 }}>
          <h3 className="card-title" style={{ fontSize: '1.2rem' }}>Eng / MLOps / Tools</h3>
          <div className="tags" style={{ gap: '0.5rem' }}>
            {['FastAPI', 'Docker', 'PostgreSQL', 'DynamoDB', 'Supabase', 'Plotly Dash', 'Git'].map((skill, index) => (
              <span key={index} className="tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="card interactive" style={{ marginBottom: 0 }}>
          <h3 className="card-title" style={{ fontSize: '1.2rem' }}>Languages</h3>
          <div className="tags" style={{ gap: '0.5rem' }}>
            {['Python', 'C++', 'SQL'].map((skill, index) => (
              <span key={index} className="tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

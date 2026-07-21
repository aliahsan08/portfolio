import React, { useState } from 'react';
import ExpandableList from './ExpandableList';
import Modal from './Modal';

const Projects = () => {
  const [modalData, setModalData] = useState({ isOpen: false, imageUrl: '', title: '' });

  const openModal = (imageUrl, title) => {
    setModalData({ isOpen: true, imageUrl, title });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, imageUrl: '', title: '' });
  };

  return (
    <section id="projects" className="fade-in">
      <h2 className="section-title">Featured Projects</h2>

      <ExpandableList initialCount={3}>

        {/* 1 - TaxPilot */}
        <div className="card interactive">
          <h3 className="card-title">TaxPilot</h3>
          <p className="card-subtitle">Pakistani FBR Income Tax Compliance Assistant</p>
          <div style={{ marginTop: '1rem' }}>
            <div className="list-item">Developed a highly accurate context-aware tax intelligence web app for Pakistani regulations.</div>
            <div className="list-item">Integrated Agentic AI workflows using LangGraph and implementing a RAG system using Qdrant, while also storing user data in Supabase and providing appropriate security.</div>
            <div className="list-item">Achieved MRR: 0.97 and Precision@5 0.88 based on document retrieval quality.</div>
          </div>
          <div className="tags">
            <span className="tag highlight">MRR: 0.97</span>
            <span className="tag highlight">Precision@5: 0.88</span>
            <span className="tag">LangGraph</span>
            <span className="tag">Vector Databases</span>
            <span className="tag">Retrieval-Augmented Generation</span>

          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a href="https://aliahsan08-taxpilot.hf.space" target="_blank" rel="noopener noreferrer" className="btn interactive">Live</a>
            <a href="https://github.com/aliahsan08/TaxPilot" target="_blank" rel="noopener noreferrer" className="btn interactive">GitHub</a>
            <button className="btn interactive" onClick={() => openModal('/images/TaxPilot Architecture Diagram.png', 'TaxPilot Architecture')}>
              View Diagram
            </button>
          </div>
        </div>

        {/* 2 - Hearth */}
        <div className="card interactive">
          <h3 className="card-title">Hearth - Kitchen Assistant</h3>
          <p className="card-subtitle">Personalized Recipe Recommendations</p>
          <div style={{ marginTop: '1rem' }}>
            <div className="list-item">Built a RAG based kitchen assistant web app that recommends recipes based on user data and real-time prompts.</div>
            <div className="list-item">Created vector embeddings using FAISS and utilized keyword matching. Stored recipe metadata in DynamoDB and user data in PostgreSQL (Supabase as backend).</div>
            <div className="list-item">Achieved Precision@5: 0.93 and Recall@1: 0.96, providing relevant recipes through a user friendly frontend.</div>
          </div>
          <div className="tags">
            <span className="tag highlight">Precision@5: 0.93</span>
            <span className="tag highlight">Recall@1: 0.96</span>
            <span className="tag">FAISS</span>
            <span className="tag">DynamoDB</span>
            <span className="tag">Retrieval-Augmented Generation</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a href="https://aliahsan08-hearth-kitchen-assistant.hf.space" target="_blank" rel="noopener noreferrer" className="btn interactive">Live</a>
            <a href="https://github.com/aliahsan08/Hearth-Kitchen-Assistant" target="_blank" rel="noopener noreferrer" className="btn interactive">GitHub</a>
            <button className="btn interactive" onClick={() => openModal('/images/Hearth Architecture Diagram.png', 'Hearth Architecture')}>
              View Diagram
            </button>
          </div>
        </div>

        {/* 3 - SpaceX Analysis */}
        <div className="card interactive">
          <h3 className="card-title">SpaceX Analysis</h3>
          <p className="card-subtitle">Exploratory Data Analysis & Modeling</p>
          <div style={{ marginTop: '1rem' }}>
            <div className="list-item">Analyzed SpaceX launch datasets to extract actionable insights on first stage landing success rates.</div>
            <div className="list-item">Applied statistical techniques, visualization, and predictive modeling to evaluate first stage landing performance and identify key factors influencing success rates.</div>
          </div>
          <div className="tags">
            <span className="tag">EDA</span>
            <span className="tag">Data Visualization</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a href="https://github.com/aliahsan08/SpaceX-Analysis" target="_blank" rel="noopener noreferrer" className="btn interactive">GitHub</a>
          </div>
        </div>

        {/* 4 - UCL Analysis 2025-26 */}
        <div className="card interactive">
          <h3 className="card-title">UCL Analysis 2025-26</h3>
          <p className="card-subtitle">Predictive Modeling & Sports Analytics</p>
          <div style={{ marginTop: '1rem' }}>
            <div className="list-item">Conducted deep analysis of UEFA Champions League player and team statistics.</div>
            <div className="list-item">Developed models to project tournament outcomes and player performance metrics.</div>
          </div>
          <div className="tags">
            <span className="tag">Sports Analytics</span>
            <span className="tag">Data Visualization</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a href="https://github.com/aliahsan08/UCL-2025-26-Analysis" target="_blank" rel="noopener noreferrer" className="btn interactive">GitHub</a>
          </div>
        </div>

        {/* 5 - Superstore Sales Dashboard */}
        <div className="card interactive">
          <h3 className="card-title">Superstore Sales Dashboard</h3>
          <p className="card-subtitle">Interactive Business Intelligence</p>
          <div style={{ marginTop: '1rem' }}>
            <div className="list-item">Built a dynamic dashboard to track retail KPIs, including revenue, profit margins, and regional sales distribution.</div>
            <div className="list-item">Designed intuitive interactive visualizations that allow stakeholders to drill down into specific timeframes and categories.</div>
          </div>
          <div className="tags">
            <span className="tag">Dashboard</span>
            <span className="tag">Business Intelligence</span>
            <span className="tag">Data Visualization</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a href="https://superstoresaledashboard.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn interactive">Live</a>
            <a href="https://github.com/aliahsan08/Superstore-Sales-Dashboard" target="_blank" rel="noopener noreferrer" className="btn interactive">GitHub</a>
          </div>
        </div>

        {/* 6 - Sidescroller Platformer (DSA Game) */}
        <div className="card interactive">
          <h3 className="card-title">Sidescroller Platformer (DSA Project)</h3>
          <p className="card-subtitle">C++ & Unreal Engine 4</p>
          <div style={{ marginTop: '1rem' }}>
            <div className="list-item">Developed a traditional side-scroller game with 6 distinct levels integrating custom Data Structures and Algorithms.</div>
            <div className="list-item">Programmed core game logic, physics, and interactions using C++ within Unreal Engine 4.27.</div>
          </div>
          <div className="tags">
            <span className="tag">C++</span>
            <span className="tag">Unreal Engine 4</span>
            <span className="tag">Data Structures</span>
            <span className="tag">Algorithms</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a href="https://github.com/aliahsan08/DSA-Project-Test" target="_blank" rel="noopener noreferrer" className="btn interactive">GitHub</a>
          </div>
        </div>

      </ExpandableList>
      <Modal isOpen={modalData.isOpen} onClose={closeModal} imageUrl={modalData.imageUrl} title={modalData.title} />
    </section>
  );
};

export default Projects;

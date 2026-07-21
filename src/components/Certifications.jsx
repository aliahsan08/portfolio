import React from 'react';
import ExpandableList from './ExpandableList';

const certs = [
  // 1. Top Exception
  { title: "IBM Data Science Professional Certificate", org: "IBM", link: "https://coursera.org/share/7fbbdb3cb33e88091b077e2052dc424f" },
  
  // 2. AI / ML
  { title: "Generative AI with Large Language Models", org: "Deeplearning.ai", link: "https://coursera.org/share/63a163daa8d00359c283625299d15cd3" },
  { title: "Generative AI: Elevate your Data Science Career", org: "IBM", link: "https://coursera.org/share/1ea9b54445843516a40a19b0da3c6acf" },
  { title: "Advanced Learning Algorithms", org: "Deeplearning.ai", link: "https://coursera.org/share/81e0096e1b6a7eec7e6db721b38847c0" },
  { title: "Neural Networks and Deep Learning", org: "Deeplearning.ai", link: "https://coursera.org/share/9fbd39e32604cf55316255eda32a80f0" },
  { title: "Supervised Machine Learning: Regression and Classification", org: "Deeplearning.ai", link: "https://coursera.org/share/27e79300a25945160a6fd85caf49e68f" },
  { title: "Machine Learning with Python", org: "IBM", link: "https://coursera.org/share/35f4a6f37c785fe2a6e5e8b990a0563f" },
  
  // 3. Data Science / Viz / Eng
  { title: "Applied Data Science Specialization", org: "IBM", link: "https://coursera.org/share/e8ed00b765e9cd0120ccf1c6be12f31c" },
  { title: "Applied Data Science Capstone", org: "IBM", link: "https://coursera.org/share/df270700ef2c8998db6db6f9ae916a3b" },
  { title: "Introduction to Data Science Specialization", org: "IBM", link: "https://coursera.org/share/60c073f187ed50295a892fa1f840e849" },
  { title: "Database and SQL for Data Science with Python", org: "IBM", link: "https://coursera.org/share/feab0ac403221f2d7590f5635edb07df" },
  { title: "Python Interactive Dashboards with Plotly Dash", org: "Packt", link: "https://coursera.org/share/81b61ed84c788704d12f42c8b6991451" },
  { title: "Data Visualization with Python", org: "IBM", link: "https://coursera.org/share/25d223f4ac11554f4cb6d036803650b8" },
  { title: "Data Analysis with Python", org: "IBM", link: "https://coursera.org/share/9d817e73d62e5465991b3c193aa47dd9" },
  { title: "Python Project for Data Science", org: "IBM", link: "https://coursera.org/share/b033e1ebfea365fb2a213b829a5af43c" },
  { title: "Python for Data Science, AI & Development", org: "IBM", link: "https://coursera.org/share/06b28119756f63a44aef8884ccea5005" },
  
  // 4. General
  { title: "Data Science Methodology", org: "IBM", link: "https://coursera.org/share/e4d0ca3588b362a1a06e04a97c9c3f65" },
  { title: "Tools for Data Science", org: "IBM", link: "https://coursera.org/share/00ba5c6a6f52af113dc7d632476de693" },
  { title: "What is Data Science?", org: "IBM", link: "https://coursera.org/share/7da66ba3c23010b1a7e44f14c2bbca4c" },
  { title: "Data Scientist Career Guide and Interview Preperation", org: "IBM", link: "https://coursera.org/share/dab19038b671ac9a0e6978e6e2292128" }
];

const Certifications = () => {
  return (
    <section id="certifications" className="fade-in">
      <h2 className="section-title">Certifications</h2>
      
      <ExpandableList initialCount={4}>
        {certs.map((cert, index) => (
          <div key={index} className="card interactive" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 className="card-title" style={{ fontSize: '1.2rem' }}>{cert.title}</h3>
              <p className="card-subtitle" style={{ marginBottom: 0 }}>By {cert.org}</p>
            </div>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn interactive" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
              View
            </a>
          </div>
        ))}
      </ExpandableList>
    </section>
  );
};

export default Certifications;

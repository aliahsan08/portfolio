import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  theme: 'base',
  themeVariables: {
    primaryColor: '#0A0A0A',
    primaryTextColor: '#EDEDED',
    primaryBorderColor: '#00E5FF',
    lineColor: '#EDEDED',
    secondaryColor: '#1A1A1A',
    tertiaryColor: '#2A2A2A',
    fontFamily: 'Space Mono',
  }
});

const Mermaid = ({ chart }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.contentLoaded();
      // To ensure it re-renders if chart changes, though we pass static charts
      mermaid.render(`mermaid-${Math.random().toString(36).substring(7)}`, chart).then(({ svg }) => {
        if(ref.current) ref.current.innerHTML = svg;
      });
    }
  }, [chart]);

  return <div className="mermaid-diagram" ref={ref} style={{ margin: '1rem 0', display: 'flex', justifyContent: 'center' }} />;
};

export default Mermaid;

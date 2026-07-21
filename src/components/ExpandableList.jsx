import React, { useState } from 'react';

const ExpandableList = ({ children, initialCount = 3, expandText = "View More", collapseText = "View Less" }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = React.Children.toArray(children);
  const showButton = childrenArray.length > initialCount;

  const visibleChildren = isExpanded ? childrenArray : childrenArray.slice(0, initialCount);

  return (
    <div>
      {visibleChildren}
      {showButton && (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button 
            className="btn btn-white interactive" 
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
          >
            {isExpanded ? collapseText : expandText}
          </button>
        </div>
      )}
    </div>
  );
};

export default ExpandableList;

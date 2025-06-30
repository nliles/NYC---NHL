// MobileDrawer.jsx
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const MobileDrawer = ({ children, title = "Landmarks" }: { children: React.ReactNode; title?: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlers = useSwipeable({
    onSwipedUp: () => setIsExpanded(true),
    onSwipedDown: () => setIsExpanded(false),
    trackMouse: true, // Enable for desktop testing
    delta: 30, // Minimum swipe distance
    preventDefaultTouchmoveEvent: false, // Allow scrolling in content
    trackTouch: true,
  });

  const handleHeaderClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      {...handlers}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: isExpanded ? '60vh' : '20vh',
        backgroundColor: 'white',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)',
        transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Handle/Header */}
      <div
        onClick={handleHeaderClick}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '12px 20px',
          cursor: 'pointer',
          borderBottom: '1px solid #f0f0f0',
          flexShrink: 0,
          userSelect: 'none',
        }}
      >
        {/* Drag Handle */}
        <div
          style={{
            width: '40px',
            height: '4px',
            backgroundColor: '#d1d5db',
            borderRadius: '2px',
            marginBottom: '12px',
          }}
        />
        
        {/* Header Content */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>
            {title}
          </h3>
          <div
            style={{
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
              fontSize: '16px',
              color: '#6b7280',
            }}
          >
            ▲
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          overflow: 'auto',
          opacity: isExpanded ? 1 : 0.8,
          transition: 'opacity 0.3s ease',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default MobileDrawer;
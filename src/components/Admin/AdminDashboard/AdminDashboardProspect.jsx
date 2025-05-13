import React, { useState, useEffect, useRef } from "react";

const AdminDashboardProspect = () => {
  // State to track the current view type
  const [isStackedView, setIsStackedView] = useState(false);
  
  // Ref for the funnel container (to avoid direct DOM manipulation)
  const funnelContainerRef = useRef(null);
  
  // State for custom tooltip
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    position: { x: 0, y: 0 }
  });
  
  // Prospect data
  const prospectStages = [
    { id: "uncontacted", name: "Uncontacted", count: 135, className: "sf-stage-uncontacted" },
    { id: "contacted", name: "Contacted (No Response)", count: 1, className: "sf-stage-contacted" },
    { id: "followup", name: "Follow Up", count: 0, className: "sf-stage-followup" },
    { id: "booked", name: "Booked APPT", count: 0, className: "sf-stage-booked" },
    { id: "noshow", name: "No Show", count: 0, className: "sf-stage-noshow" }
  ];
  
  // Calculate the maximum count (for percentage calculations)
  const maxCount = Math.max(...prospectStages.map(stage => stage.count));
  
  // Toggle between funnel and stacked views
  const toggleView = () => {
    setIsStackedView(!isStackedView);
  };
  
  // Handle "More" button click
  const handleMoreClick = () => {
    // Example: We could show additional stages or a dropdown
    alert('Additional funnel stages or options would appear here');
  };
  
  // Show tooltip
  const showTooltip = (e, content) => {
    setTooltip({
      visible: true,
      content,
      position: {
        x: e.clientX,
        y: e.clientY
      }
    });
  };
  
  // Hide tooltip
  const hideTooltip = () => {
    setTooltip(prev => ({
      ...prev,
      visible: false
    }));
  };
  
  // Progress bar component for stacked view
  const ProgressBar = ({ count, maxCount }) => {
    const percentage = count > 0 ? (count / maxCount) * 100 : 0;
    
    return (
      <div className="sf-progress">
        <div 
          className="sf-progress-bar" 
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    );
  };

  // Custom tooltip component
  const Tooltip = () => {
    if (!tooltip.visible) return null;
    
    return (
      <div 
        className="sf-tooltip"
        style={{
          position: "fixed",
          left: `${tooltip.position.x + 10}px`,
          top: `${tooltip.position.y + 10}px`,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "14px",
          zIndex: 1000,
          pointerEvents: "none"
        }}
      >
        {tooltip.content}
      </div>
    );
  };

  return (
    <>
      <div className="sf-container my-4">
        <h2 className="sf-title">Prospect Funnel</h2>
        <div 
          className="sf-view-toggle" 
          onClick={toggleView}
        >
          {isStackedView ? "Show Funnel View" : "Show Stacked View"}
        </div>
        <div 
          ref={funnelContainerRef}
          className={`sf-funnel ${isStackedView ? "sf-stacked" : ""}`}
        >
          {prospectStages.map((stage) => (
            <div 
              key={stage.id}
              className={`sf-stage ${stage.className}`}
              onMouseEnter={(e) => showTooltip(e, `${stage.name}: ${stage.count} prospects`)}
              onMouseMove={(e) => showTooltip(e, `${stage.name}: ${stage.count} prospects`)}
              onMouseLeave={hideTooltip}
              aria-label={`${stage.name}: ${stage.count} prospects`}
            >
              {stage.name} ({stage.count})
              {isStackedView && <ProgressBar count={stage.count} maxCount={maxCount} />}
            </div>
          ))}
          <div 
            className="sf-stage sf-stage-more"
            onClick={handleMoreClick}
          >
            More
          </div>
        </div>
      </div>
      
      {/* Render the custom tooltip */}
      <Tooltip />
    </>
  );
};

export default AdminDashboardProspect;
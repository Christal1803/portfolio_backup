import React, { useContext } from 'react';
import {  MenuProvider } from 'react-horizontal-scrolling-menu';
const ProgressBar = () => {
    const { scrollPosition, totalItemsWidth } = useContext(MenuProvider.Context);
    const progressPercentage = (scrollPosition / (totalItemsWidth - window.innerWidth)) * 100;
  
    return (
      <div className="progress-bar" style={{ position: 'fixed', top: 0, left: 0, width: `${progressPercentage}%` }}>
        {/* Your progress bar */}
      </div>
    );
  };

  export default ProgressBar;
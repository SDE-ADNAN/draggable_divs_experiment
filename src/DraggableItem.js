// DraggableItem.js
import React, { useState } from 'react';

const DraggableItem = ({ name }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', name);
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab',
      }}
    >
      <div
        style={{
          width: '100px',
          height: '50px',
          backgroundColor: 'lightblue',
          margin: '10px',
        }}
      >
        {name}
      </div>
    </div>
  );
};

export default DraggableItem;

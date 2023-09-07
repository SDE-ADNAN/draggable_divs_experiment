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
        width: '100px',
        height: '50px',
        backgroundColor: isDragging ? 'lightgray' : 'lightblue',
        margin: '10px',
        cursor: 'grab',
      }}
    >
      {name}
    </div>
  );
};

export default DraggableItem;

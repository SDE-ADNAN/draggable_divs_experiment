// DroppableContainer.js
import React, { useState } from 'react';

const DroppableContainer = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const itemName = e.dataTransfer.getData('text/plain');
    setDroppedItems([...droppedItems, itemName]);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        width: '300px',
        height: '300px',
        backgroundColor: 'lightgray',
        padding: '20px',
      }}
    >
      Drop here
      <div>
        {droppedItems.map((itemName, index) => (
          <div key={index}>{itemName}</div>
        ))}
      </div>
    </div>
  );
};

export default DroppableContainer;

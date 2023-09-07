// DroppableContainer.js
import React, { useState } from 'react';
import DraggableItem from './DraggableItem';

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
      <h2>Drop Here</h2>
      <div>
        {droppedItems.map((itemName, index) => (
          <div key={index} style={{ margin: '5px' }}>
            <DraggableItem name={itemName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DroppableContainer;

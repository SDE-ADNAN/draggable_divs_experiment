import logo from './logo.svg';
import './App.css';
import DroppableContainer from './DroppableContainer';
import DraggableItem from './DraggableItem';

function App() {
  return (
    <div>
      <h1>Drag and Drop Example</h1>
      <DroppableContainer />
      <div style={{ display: 'flex' }}>
        <DraggableItem name="Item 1" />
        <DraggableItem name="Item 2" />
        <DraggableItem name="Item 3" />
      </div>
    </div>
  );
}

export default App;

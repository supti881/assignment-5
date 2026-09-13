import React from 'react';
import './Stack.css';

interface StackProps {
  selectedTechs: any[];
  onRemove: (id: string | number) => void;
}

const Stack: React.FC<StackProps> = ({ selectedTechs, onRemove }) => {
  return (
    <aside className="stack-card">
      <h3 className="stack-title">Stack</h3>

      {selectedTechs.length === 0 ? (
        <p className="empty-text">No technology added</p>
      ) : (
        <ul className="selected-list">
          {selectedTechs.map((item) => (
            <li key={item.id} className="selected-item">
              <span>{item.name}</span>
              <button onClick={() => onRemove(item.id)}>×</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default Stack;
import React from 'react';
import './Stack.css';

interface StackProps {
  selectedTechs: any[];
  onRemove: (id: string | number) => void;
  onClearAll: () => void;
}

const Stack: React.FC<StackProps> = ({ selectedTechs, onRemove, onClearAll }) => {
  return (
    <aside className="stack-card">
      <h3 className="stack-title">Your Stack</h3>
      <p className="stack-subtitle">
        {selectedTechs.length === 0 ? 'No Technology Selected' : `${selectedTechs.length} Selected`}
      </p>

      {selectedTechs.length === 0 ? (
        <div className="empty-stack-box">
          <p>Your stack is empty.</p>
        </div>
      ) : (
        <>
          <ul className="selected-list">
            {selectedTechs.map((item) => (
              <li key={item.id} className="selected-item">
                <div className="item-left">
                  {item.icon && (
                    <img src={item.icon} alt={item.name} className="stack-item-icon" />
                  )}
                  <span>{item.name}</span>
                </div>
                <button className="btn-remove-single" onClick={() => onRemove(item.id)}>×</button>
              </li>
            ))}
          </ul>

          <button className="btn-remove-all" onClick={onClearAll}>
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default Stack;
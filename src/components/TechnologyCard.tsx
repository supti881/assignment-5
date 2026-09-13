import React from 'react';
import './TechnologyCard.css';

const badgeColorMap: Record<string, string> = {
  'Popular': 'blue',
  'Versatile': 'green',
  'Standard': 'green',
  'Fast': 'orange',
  'Top SQL': 'blue',
  'Cache' : 'red',
  'Ubiquitous' : 'orange',
  'Essential': 'blue',
  'Robust': 'blue',
  'Modern' : 'green',
  'Containers': 'blue'
};

export interface Technology {
  id: string | number;
  name: string;
  category: string;
  description: string;
  icon: string;
  badge?: string;
  experienceLevel?: string;
  rating?: number;
}

interface TechnologyCardProps {
  tech: Technology;
  onSelect: (tech: Technology) => void;
  isSelected?: boolean;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ tech, onSelect, isSelected }) => {
  return (
    <div className="tech-card">
      <div className="tech-card-header">
        <img src={tech.icon} alt={tech.name} className="tech-icon" />
        {tech.badge && (
          <span className={`tech-badge ${badgeColorMap[tech.badge] || 'green'}`}>
            {tech.badge}
          </span>
        )}
      </div>

      <h3 className="tech-title">{tech.name}</h3>
      <p className="tech-description">{tech.description}</p>

      <div className="tech-meta">
        <span className="meta-pill">{tech.category}</span>
        <span className="meta-pill">{tech.experienceLevel || 'Beginner-Friendly'}</span>
        <span className="meta-rating">★ {tech.rating || '4.9'}</span>
      </div>

      <button
        className={`btn-add-stack ${isSelected ? 'selected' : ''}`}
        onClick={() => onSelect(tech)}
        disabled={isSelected}
      >
        {isSelected ? 'Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechnologyCard;
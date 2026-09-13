import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologyCard from './components/TechnologyCard';
import Stack from './components/Stack';
import Toast from './components/Toast'; // 1. Added Toast import
import './App.css';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [toastMessage, setToastMessage] = useState(null); // 2. Toast state

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => setTechnologies(data));
  }, []);

  // Helper to display toast for 3 seconds
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToStack = (tech) => {
    if (!selectedTechs.some((t) => t.id === tech.id)) {
      setSelectedTechs([...selectedTechs, tech]);
      triggerToast(`${tech.name} added to your stack!`);
    }
  };

  const handleRemoveFromStack = (id) => {
    const removedTech = selectedTechs.find((t) => t.id === id);
    setSelectedTechs(selectedTechs.filter((t) => t.id !== id));
    if (removedTech) {
      triggerToast(`${removedTech.name} removed from stack`);
    }
  };

  // 3. Clear all items handler
  const handleClearAll = () => {
    setSelectedTechs([]);
    triggerToast('All technologies removed from stack');
  };

  const selectedTechIds = selectedTechs.map((t) => t.id);

  return (
    <div>
      <Navbar />
      <Hero />

      <main className="main-wrapper">
        <div className="section-header">
          <h2 className="section-title">
            Explore the <span className="brand-gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">Pick one technology per category to build your ideal stack.</p>
        </div>

        <div className="content-layout">
          <div className="tech-grid">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                onSelect={handleAddToStack}
                isSelected={selectedTechIds.includes(tech.id)}
              />
            ))}
          </div>

          <aside className="sidebar-col">
            <Stack 
              selectedTechs={selectedTechs} 
              onRemove={handleRemoveFromStack} 
              onClearAll={handleClearAll} // Passed onClearAll prop
            />
          </aside>
        </div>
      </main>

     
      <Toast message={toastMessage} />
    </div>
  );
}

export default App;
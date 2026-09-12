import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        
      
        <div className="navbar-desktop">
          <div className="navbar-brand">
            <img src="/logo-text.png" alt="Dev Stack" className="brand-logo" />
          </div>

          <nav className="nav-links">
            <a href="#home" className="active">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <button className="btn-signin">Sign In</button>
            <button className="btn-signup">Sign Up</button>
          </div>
        </div>

        {/* Mobile View */}
        <div className="navbar-mobile">
          <button 
            className="hamburger-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="4" y1="18" x2="20" y2="18" />
</svg>
          </button>

          <div className="navbar-brand">
            <img src="/logo-text.png" alt="Dev Stack" className="brand-logo" />
          </div>

          <div className="nav-actions-mobile">
            <button className="btn-signin">Sign In</button>
            <button className="btn-signup">Sign Up</button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#technologies" onClick={() => setIsMenuOpen(false)}>Technologies</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}

      </div>
    </header>
  );
}

export default Navbar;
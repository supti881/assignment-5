import React from 'react';
import './Toast.css';

interface ToastProps {
  message: string | null;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="toast-container">
      <div className="toast-content">
        <span className="toast-icon">✓</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
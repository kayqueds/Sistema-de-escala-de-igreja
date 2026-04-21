import './Sidebar.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { label: 'Escalas', path: '/leader/escalas', icon: '🎵' },
    { label: 'Membros', path: '/leader/membros', icon: '👥' },
    { label: 'Ocorrências', path: '/leader/ocorrencias', icon: '📋' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h1 className="sidebar-title">LOUVA</h1>
          <button
            className="sidebar-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '←' : '→'}
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {isOpen && <span className="sidebar-label">{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="sidebar-logout">
            <span className="sidebar-icon">🚪</span>
            {isOpen && <span className="sidebar-label">Sair</span>}
          </button>
        </div>
      </div>

      {!isOpen && <div className="sidebar-spacer"></div>}
    </>
  );
}

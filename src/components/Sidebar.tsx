import {
  LayoutDashboard,/*
  Users,
  Activity,
  BarChart3,*/
  LogOut,
  HeartPulse,
} from 'lucide-react';
import { Button } from '@base-ui/react/button';
import './Sidebar.css';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
}

const navItems: NavItem[] = [
  { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },

];

const bottomItems: NavItem[] = [
  //{ icon: <Settings size={20} />, label: 'Configuracion' },
  { icon: <LogOut size={20} />, label: 'Cerrar sesion' },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <HeartPulse size={28} className="logo-icon" />
          <div className="logo-text">
            <span className="logo-name">Sarah</span>
            <span className="logo-subtitle">Panel de Gestion</span>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <span className="nav-section-title">Principal</span>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <Button
                  className={`nav-item ${item.active ? 'active' : ''}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && <span className="nav-badge">{item.badge}</span>}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="sidebar-footer">
        <ul className="nav-list">
          {bottomItems.map((item) => (
            <li key={item.label}>
              <Button className="nav-item">
                {item.icon}
                <span>{item.label}</span>
              </Button>
            </li>
          ))}
        </ul>
        <div className="user-info">
          <div className="user-avatar"></div>
          <div className="user-details">
            <span className="user-name">Gestor</span>
            <span className="user-role">Gestor Clinico</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

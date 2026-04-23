import { /*Bell, Search,*/ Calendar, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from '@base-ui/react/button';
import './Header.css';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">{title}</h1>
        {subtitle && <p className="header-subtitle">{subtitle}</p>}
      </div>

      <div className="header-right">
        {/*
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Buscar pacientes, metricas..."
            className="search-input"
          />
        </div>*/}

        <div className="header-actions">
          <div className="date-filter">
            <Calendar size={16} />
            <span>Ultimos 30 dias</span>
          </div>

          <Button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
          {/*
          <button className="notification-btn">
            <Bell size={20} />
            <span className="notification-dot"></span>
          </button>
          */}
        </div>
      </div>
    </header>
  );
}

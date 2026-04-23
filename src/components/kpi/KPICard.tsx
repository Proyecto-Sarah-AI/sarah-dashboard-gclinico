import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import './KPICard.css';

interface KPICardProps {
  title: string;
  value: string;
  change?: number;
  changeLabel?: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  status?: 'success' | 'warning' | 'danger' | 'info';
}

export function KPICard({
  title,
  value,
  change,
  changeLabel,
  icon,
  trend = 'neutral',
  status = 'info',
}: KPICardProps) {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={14} />;
      case 'down':
        return <TrendingDown size={14} />;
      default:
        return <Minus size={14} />;
    }
  };

  return (
    <div className={`kpi-card kpi-card--${status}`}>
      <div className="kpi-header">
        <span className="kpi-title">{title}</span>
        <div className={`kpi-icon kpi-icon--${status}`}>{icon}</div>
      </div>

      <div className="kpi-content">
        <span className="kpi-value">{value}</span>

        {change !== undefined && (
          <div className={`kpi-change kpi-change--${trend}`}>
            {getTrendIcon()}
            <span>{change > 0 ? '+' : ''}{change}%</span>
            {changeLabel && <span className="kpi-change-label">{changeLabel}</span>}
          </div>
        )}
      </div>
    </div>
  );
}

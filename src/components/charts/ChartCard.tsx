import { MoreHorizontal } from 'lucide-react';
import { Button } from '@base-ui/react/button';
import './ChartCard.css';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}

export function ChartCard({ title, subtitle, children, action }: ChartCardProps) {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div className="chart-header-left">
          <h3 className="chart-title">{title}</h3>
          {subtitle && <p className="chart-subtitle">{subtitle}</p>}
        </div>
        <div className="chart-header-right">
          {action}
          <Button className="chart-menu-btn">
            <MoreHorizontal size={18} />
          </Button>
        </div>
      </div>
      <div className="chart-content">{children}</div>
    </div>
  );
}

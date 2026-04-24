import {
  Users,
} from 'lucide-react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { KPICard } from './kpi/KPICard';
import { ChartCard } from './charts/ChartCard';
import {
  PharmacologicalAdherenceHistogramChart,
  CareAdherenceHistogramChart,
  IMCVariationHistogramChart,
  ParticipationsByMonthChart,
} from './charts/Charts';
import './Dashboard.css';
import { Button } from '@base-ui/react/button';
import { downloadDashboardexcel } from './utility/excelService';

export function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <Header
          title="Gestor de Clinica"
          subtitle="Monitoreo de efectividad del programa Sarah"
        />

        <div className="dashboard-content">
          {/* KPI Cards */}
          <section className="kpi-section">
            <KPICard
              title="Pacientes Activos"
              value="200"
              change={15}
              changeLabel="nuevos este mes"
              icon={<Users size={20} />}
              trend="up"
              status="info"
            />
                        
            <Button className="export-button" onClick={downloadDashboardexcel}>
              Exportar datos
            </Button>

          </section>

          {/* Charts Grid */}
          <section className="charts-section">            
            <div className="charts-row">
              <ChartCard
                title="Adherencia Farmacologica"
                subtitle="Porcentaje de dosis tomadas"
              >
                <PharmacologicalAdherenceHistogramChart />
              </ChartCard>

              <ChartCard
                title="Adherencia del Cuidado"
                subtitle="Porcentaje de citas asistidas"
              >
                <CareAdherenceHistogramChart />
              </ChartCard>

              <ChartCard
                title="Variacion del IMC"
                subtitle="Distribucion de cambios en el indice de masa corporal"
              >
                <IMCVariationHistogramChart />
              </ChartCard>

              <ChartCard
                title="Interacciones por Mes"
                subtitle="Distribucion mensual de interacciones"
              >
                <ParticipationsByMonthChart />
              </ChartCard>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

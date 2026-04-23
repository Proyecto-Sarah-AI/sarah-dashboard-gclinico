import {/*
  Activity,
  TrendingDown,
  MessageSquare,
  CalendarCheck,*/
  Users,
} from 'lucide-react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { KPICard } from './kpi/KPICard';
import { ChartCard } from './charts/ChartCard';
import {/*
  AdherenceChart,
  IMCComparisonChart,
  ParticipationChart,
  AlertsDistributionChart,
  AppointmentsChart,*/
  AdherenceHistogramChart,
  IMCVariationHistogramChart,
  ParticipationsByMonthChart,
} from './charts/Charts';
import './Dashboard.css';

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
            {/*

              <KPICard
              title="Adherencia Promedio"
              value="82.5%"
              change={4.2}
              changeLabel="vs mes anterior"
              icon={<Activity size={20} />}
              trend="up"
              status="success"
              />
            
            <KPICard
              title="IMC Promedio"
              value="29.8"
              change={-3.1}
              changeLabel="vs inicio"
              icon={<TrendingDown size={20} />}
              trend="up"
              status="success"
            />
            <KPICard
              title="Participacion Diaria"
              value="156"
              change={12}
              changeLabel="interacciones/dia"
              icon={<MessageSquare size={20} />}
              trend="up"
              status="info"
            />
            <KPICard
              title="Cumplimiento Citas"
              value="94%"
              change={6}
              changeLabel="vs mes anterior"
              icon={<CalendarCheck size={20} />}
              trend="up"
              status="success"
            />*/
            }
            <KPICard
              title="Pacientes Activos"
              value="200"
              change={15}
              changeLabel="nuevos este mes"
              icon={<Users size={20} />}
              trend="up"
              status="info"
            />
          </section>

          {/* Charts Grid */}
          <section className="charts-section">
            {/*<div className="charts-grid">
              

              
              <ChartCard
                title="Nivel de Adherencia"
                subtitle="Adherencia diaria y acumulada vs objetivo"
              >
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-dot legend-dot--primary"></span>
                    <span>Adherencia</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot legend-dot--secondary"></span>
                    <span>Objetivo (80%)</span>
                  </div>
                </div>
                <AdherenceChart />
              </ChartCard>

              <ChartCard
                title="Evolucion del IMC"
                subtitle="Comparacion: Grupo Sarah vs Grupo Control"
              >
                <IMCComparisonChart />
              </ChartCard>

              <ChartCard
                title="Nivel de Participacion"
                subtitle="Interacciones semanales con Sarah"
              >
                <ParticipationChart />
              </ChartCard>

              <ChartCard
                title="Distribucion de Alertas"
                subtitle="Clasificacion por nivel de riesgo"
              >
                <AlertsDistributionChart />
              </ChartCard>
            </div>
              */}

            <div className="charts-row">
              {/*
                <ChartCard
                title="Cumplimiento de Citas"
                subtitle="Citas programadas vs cumplidas"
                >
                <AppointmentsChart />
              </ChartCard>*/
              }

              <ChartCard
                title="Distribucion de Adherencia"
                subtitle="Cantidad de pacientes por nivel de adherencia"
              >
                <AdherenceHistogramChart />
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

import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

// Datos de Adherencia
const adherenceData = [
  { month: 'Ene', adherencia: 72, objetivo: 80 },
  { month: 'Feb', adherencia: 75, objetivo: 80 },
  { month: 'Mar', adherencia: 78, objetivo: 80 },
  { month: 'Abr', adherencia: 74, objetivo: 80 },
  { month: 'May', adherencia: 82, objetivo: 80 },
  { month: 'Jun', adherencia: 85, objetivo: 80 },
];

// Datos de IMC
const imcData = [
  { month: 'Ene', sarah: 32.5, control: 33.2 },
  { month: 'Feb', sarah: 31.8, control: 33.0 },
  { month: 'Mar', sarah: 31.2, control: 32.9 },
  { month: 'Abr', sarah: 30.5, control: 32.7 },
  { month: 'May', sarah: 29.8, control: 32.5 },
  { month: 'Jun', sarah: 29.2, control: 32.4 },
];

// Datos de Participacion
const participationData = [
  { day: 'Lun', mensajes: 145, interacciones: 89 },
  { day: 'Mar', mensajes: 132, interacciones: 76 },
  { day: 'Mie', mensajes: 156, interacciones: 95 },
  { day: 'Jue', mensajes: 142, interacciones: 82 },
  { day: 'Vie', mensajes: 138, interacciones: 78 },
  { day: 'Sab', mensajes: 98, interacciones: 54 },
  { day: 'Dom', mensajes: 85, interacciones: 42 },
];

// Datos de Alertas
const alertsData = [
  { name: 'Riesgo Alto', value: 8, color: '#ef4444' },
  { name: 'Riesgo Medio', value: 23, color: '#f59e0b' },
  { name: 'Riesgo Bajo', value: 45, color: '#22c55e' },
  { name: 'Sin Riesgo', value: 124, color: '#3b82f6' },
];

// Datos de Citas
const appointmentsData = [
  { month: 'Ene', cumplidas: 85, programadas: 100 },
  { month: 'Feb', cumplidas: 88, programadas: 98 },
  { month: 'Mar', cumplidas: 92, programadas: 102 },
  { month: 'Abr', cumplidas: 90, programadas: 95 },
  { month: 'May', cumplidas: 95, programadas: 100 },
  { month: 'Jun', cumplidas: 97, programadas: 100 },
];

// Datos de Histograma de Adherencia
const adherenceHistogramData = [
  { range: '0-20%', pacientes: 10 },
  { range: '20-40%', pacientes: 25 },
  { range: '40-60%', pacientes: 65 },
  { range: '60-80%', pacientes: 50 },
  { range: '80-100%', pacientes: 20 },
];

// Datos de Histograma de Variacion IMC
const imcVariationHistogramData = [
  { range: '-5% a -3%', pacientes: 15 },
  { range: '-3% a -1%', pacientes: 30 },
  { range: '-1% a 1%', pacientes: 50 },
  { range: '1% a 3%', pacientes: 40 },
  { range: '3% a 5%', pacientes: 25 },
  { range: '5%+', pacientes: 10 },
];

// Datos de Participaciones por Mes
const participationsByMonthData = [
  { month: 'Ene', participaciones: 1200 },
  { month: 'Feb', participaciones: 1350 },
  { month: 'Mar', participaciones: 1100 },
  { month: 'Abr', participaciones: 1400 },
  { month: 'May', participaciones: 1600 },
  { month: 'Jun', participaciones: 1500 },
];

const tooltipStyle = {
  backgroundColor: '#18181f',
  border: '1px solid #2a2a35',
  borderRadius: '8px',
  fontSize: '12px',
};

export function AdherenceChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={adherenceData}>
        <defs>
          <linearGradient id="adherenceGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2a35" vertical={false} />
        <XAxis dataKey="month" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} domain={[60, 100]} />
        <Tooltip contentStyle={tooltipStyle} />
        <Area
          type="monotone"
          dataKey="adherencia"
          stroke="#3b82f6"
          strokeWidth={2}
          fill="url(#adherenceGradient)"
          name="Adherencia %"
        />
        <Line
          type="monotone"
          dataKey="objetivo"
          stroke="#22c55e"
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={false}
          name="Objetivo"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function IMCComparisonChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={imcData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2a35" vertical={false} />
        <XAxis dataKey="month" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} domain={[28, 35]} />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend
          wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
          iconType="circle"
          iconSize={8}
        />
        <Line
          type="monotone"
          dataKey="sarah"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={{ fill: '#3b82f6', strokeWidth: 0, r: 4 }}
          name="Grupo Sarah"
        />
        <Line
          type="monotone"
          dataKey="control"
          stroke="#71717a"
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={{ fill: '#71717a', strokeWidth: 0, r: 4 }}
          name="Grupo Control"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function ParticipationChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={participationData} barGap={4}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2a35" vertical={false} />
        <XAxis dataKey="day" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend
          wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
          iconType="circle"
          iconSize={8}
        />
        <Bar dataKey="mensajes" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Mensajes" />
        <Bar dataKey="interacciones" fill="#22c55e" radius={[4, 4, 0, 0]} name="Interacciones" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function AlertsDistributionChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={alertsData}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          paddingAngle={2}
          dataKey="value"
        >
          {alertsData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} />
        <Legend
          wrapperStyle={{ fontSize: '12px' }}
          iconType="circle"
          iconSize={8}
          layout="vertical"
          align="right"
          verticalAlign="middle"
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function AppointmentsChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={appointmentsData} barGap={0}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2a35" vertical={false} />
        <XAxis dataKey="month" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend
          wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
          iconType="circle"
          iconSize={8}
        />
        <Bar dataKey="programadas" fill="#2a2a35" radius={[4, 4, 0, 0]} name="Programadas" />
        <Bar dataKey="cumplidas" fill="#22c55e" radius={[4, 4, 0, 0]} name="Cumplidas" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function AdherenceHistogramChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={adherenceHistogramData} barGap={0}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2a35" vertical={false} />
        <XAxis dataKey="range" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Bar dataKey="pacientes" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Pacientes" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function IMCVariationHistogramChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={imcVariationHistogramData} barGap={0}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2a35" vertical={false} />
        <XAxis dataKey="range" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Bar dataKey="pacientes" fill="#f59e0b" radius={[4, 4, 0, 0]} name="Pacientes" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function ParticipationsByMonthChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={participationsByMonthData} barGap={0}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2a35" vertical={false} />
        <XAxis dataKey="month" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Bar dataKey="participaciones" fill="#22c55e" radius={[4, 4, 0, 0]} name="Participaciones" />
      </BarChart>
    </ResponsiveContainer>
  );
}

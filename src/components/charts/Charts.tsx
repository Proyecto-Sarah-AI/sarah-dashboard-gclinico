import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';


// Datos de Histograma de Adherencia farmacologica
const pharmacologicalAdherenceData = [
  { month: 'Ene', percentage: 48 },
  { month: 'Feb', percentage: 63 },
  { month: 'Mar', percentage: 74 },
  { month: 'Abr', percentage: 83 },
  { month: 'May', percentage: 42 },
  { month: 'Jun', percentage: 55 },
  { month: 'Jul', percentage: 68 },
  { month: 'Ago', percentage: 47 },
  { month: 'Sep', percentage: 19 },
  { month: 'Oct', percentage: 46 },
  { month: 'Nov', percentage: 78 },
  { month: 'Dic', percentage: 36 }
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

const  CareAdherenceData = [
  { month: 'Ene', percentage: 46 },
  { month: 'Feb', percentage: 72 },
  { month: 'Mar', percentage: 15 },
  { month: 'Abr', percentage: 76 },
  { month: 'May', percentage: 93 },
  { month: 'Jun', percentage: 43 },
  { month: 'Jul', percentage: 41 },
  { month: 'Ago', percentage: 26 },
  { month: 'Sep', percentage: 24 },
  { month: 'Oct', percentage: 46 },
  { month: 'Nov', percentage: 48 },
  { month: 'Dic', percentage: 67 }
]

export const dataSets = {
  imcVariationHistogramData,
  participationsByMonthData,
  CareAdherenceData,
  pharmacologicalAdherenceData
}

const tooltipStyle = {
  color: '#f1f6fa',   //foreground claro
  backgroundColor: '#1f273a', //background oscuro
  border: "none",
  borderRadius: '8px',
  fontSize: '12px',
  fontWeight: '500'
};

export function PharmacologicalAdherenceHistogramChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={pharmacologicalAdherenceData} barGap={0}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2a35" vertical={false} />
        <XAxis dataKey="month" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} tickFormatter={(value) => value + '%'} />
        <Tooltip contentStyle={tooltipStyle} />
        <Line type="monotone" dataKey="percentage" name="Adherencia" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4, fill: '#3b82f6' }}/>
      </LineChart>
    </ResponsiveContainer>
  );
}

export function CareAdherenceHistogramChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={CareAdherenceData} barGap={0}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2a35" vertical={false} />
        <XAxis dataKey="month" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} tickFormatter={(value) => value + '%'} />
        <Tooltip contentStyle={tooltipStyle} />
        <Line type="monotone" dataKey="percentage" name="Adherencia" stroke="#f6673b" strokeWidth={2} dot={{ r: 4, fill: '#f6673b' }}/>
      </LineChart>
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

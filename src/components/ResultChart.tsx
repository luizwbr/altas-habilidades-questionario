import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

interface ResultChartProps {
  tdahScore: number;
  teaScore: number;
  altasHabilidadesScore: number;
}

export default function ResultChart({ tdahScore, teaScore, altasHabilidadesScore }: ResultChartProps) {
  const data = [
    { subject: 'TDAH', score: tdahScore, fullMark: 100 },
    { subject: 'TEA', score: teaScore, fullMark: 100 },
    { subject: 'Altas Habilidades', score: altasHabilidadesScore, fullMark: 100 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#6366f1', fontSize: 14, fontWeight: 600 }} />
        <Tooltip formatter={(value) => [`${value}%`, 'Pontuação']} />
        <Radar
          name="Pontuação"
          dataKey="score"
          stroke="#6366f1"
          fill="#6366f1"
          fillOpacity={0.4}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const data = [
  { day: 1, visitors: 141 },
  { day: 2, visitors: 100 },
  { day: 3, visitors: 89 },
  { day: 4, visitors: 91 },
  { day: 5, visitors: 91 },
  { day: 6, visitors: 91 },
  { day: 7, visitors: 91 },
  { day: 8, visitors: 91 },
  { day: 9, visitors: 91 },
  { day: 10, visitors: 91 },
]

export function VisitorsChart() {
    return (
       <Card className="w-full h-full shadow-none rounded-xl">
            <CardHeader>
                <CardTitle className='text-base font-medium'>Visitantes</CardTitle>
                <CardDescription>
                    Número de visitantes ao longo do tempo
                </CardDescription>
            </CardHeader>

            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                            dataKey="day" 
                            axisLine={false} 
                            tickLine={false}
                            tick={{ fontSize: 12 }}
                        />
                        <YAxis 
                            axisLine={false} 
                            tickLine={false}
                            tick={{ fontSize: 12 }}
                        />
                        <Tooltip />
                        <Line 
                            type="monotone" 
                            dataKey="visitors" 
                            stroke="#3b82f6" 
                            strokeWidth={2}
                            dot={{ fill: '#3b82f6', r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
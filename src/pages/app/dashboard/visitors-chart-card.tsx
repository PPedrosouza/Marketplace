import { HugeiconsIcon } from '@hugeicons/react';
import { UserMultiple02Icon, Calendar04Icon } from '@hugeicons/core-free-icons';

import { Card, CardContent, CardHeader, CardTitle, CardAction } from '@/components/ui/card'

import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import colors from 'tailwindcss/colors'

const data = [
    { day: 9, dayInFull: '09 de outubro', visitors: 141 },
    { day: 10, dayInFull: '10 de outubro', visitors: 100 },
    { day: 11, dayInFull: '11 de outubro', visitors: 89 },
    { day: 12, dayInFull: '12 de outubro', visitors: 47 },
    { day: 13, dayInFull: '13 de outubro', visitors: 65 },
    { day: 14, dayInFull: '14 de outubro', visitors: 41 },
    { day: 15, dayInFull: '15 de outubro', visitors: 77 },
    { day: 16, dayInFull: '16 de outubro', visitors: 90 },
    { day: 17, dayInFull: '17 de outubro', visitors: 150 },
    { day: 18, dayInFull: '18 de outubro', visitors: 40 },
]

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const dayInFull = payload[0].payload.dayInFull;
        return (
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 space-y-2 px-3 py-3">
                <p className="text-sm font-normal text-gray-700">
                    {dayInFull}
                </p>
                <p className="flex flex-row text-sm gap-2">
                    <HugeiconsIcon icon={UserMultiple02Icon} className='text-gray-400 w-4 h-4' />
                    <span className="font-normal text-gray-400 text-xs">{payload[0].value} visitantes</span>
                </p>
            </div>
        );
    }
    return null;
};

export function VisitorsChartCard() {
    return (
        <Card className="w-full h-full shadow-none rounded-xl justify-center">
            <CardHeader className='flex flex-row justify-between pt-0 pb-2 px-6 items-center'>
                <CardTitle className='font-bold text-lg justify-start'>Visitantes</CardTitle>
                <CardAction className='flex flex-row justify-center text-right text-sm gap-2 text-gray-500'>
                    <HugeiconsIcon icon={Calendar04Icon} className='text-sky-400 w-5 h-5' />
                    9 de outubro - 10 de outubro
                </CardAction>
            </CardHeader>

            <CardContent className='flex flex-col justify-center pl-0'>
                <ResponsiveContainer width="100%" height={240} className='justify-start'>
                    <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 15 }} className='font-medium'>
                        <CartesianGrid strokeDasharray="10 5" vertical={false} stroke="#f6e7e0" />
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12 }}
                            dy={16}
                            stroke={colors.gray[400]}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12 }}
                            stroke={colors.gray[400]}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Line
                            type="monotone"
                            dataKey="visitors"
                            stroke={colors.sky[400]}
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
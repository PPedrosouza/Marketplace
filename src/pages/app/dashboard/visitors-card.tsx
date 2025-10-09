import { HugeiconsIcon } from '@hugeicons/react';
import { UserMultiple02Icon } from '@hugeicons/core-free-icons';

import { Card, CardContent } from '@/components/ui/card'

export function VisitorsCard() {
    return (
        <Card className="space-y-2 w-full h-full shadow-none rounded-xl items-start justify-start">
            <CardContent className="flex flex-row tracking-wide">
                <div className='p-4 bg-sky-100 rounded-lg mr-4 w-[80px] h-[86px] flex items-center justify-center'>
                    <HugeiconsIcon icon={UserMultiple02Icon} className='w-[40px] h-[40px] text-gray-400' />
                </div>

                <div className='flex flex-col justify-center'>
                    <h1 className='text-2xl font-bold'>1.238</h1>
                    <span className='text-gray-500'>Pessoas visitantes</span>
                </div>
            </CardContent>
        </Card>
    )
}
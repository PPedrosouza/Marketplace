import { Card, CardContent } from '@/components/ui/card'

import { HugeiconsIcon } from '@hugeicons/react';
import { SaleTag02Icon } from '@hugeicons/core-free-icons';

export function ProductsSoldCard() {
    return (
        <Card className="space-y-2 w-full h-full shadow-none rounded-xl items-start justify-start min-h-[120px]">
            <CardContent className="flex flex-row tracking-wide p-3">
                <div className='bg-sky-100 rounded-lg mr-6 w-[90px] h-[90px] flex items-center justify-center'>
                    <HugeiconsIcon icon={SaleTag02Icon} className='w-[40px] h-[40px] text-sky-600' />
                </div>

               <div className='flex flex-col justify-center gap-3 space-y-0'>
                    <h1 className='text-2xl font-bold'>24</h1>
                    <span className='text-gray-500 w-1/2 text-sm'>Produtos Vendidos</span>
                </div>
            </CardContent>
        </Card>
    )
}
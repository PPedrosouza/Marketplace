import { HugeiconsIcon } from '@hugeicons/react';
import { Store01Icon } from '@hugeicons/core-free-icons';
import { Card, CardContent } from '@/components/ui/card'

export function ProductsAdvertisedCard() {
  return (
   <Card className="space-y-2 w-full h-full shadow-none rounded-xl items-start justify-start min-h-[120px]">
    <CardContent className="flex flex-row tracking-wide p-3">
        <div className='p-6 bg-sky-100 rounded-lg mr-6 w-[90px] h-[90px] flex items-center justify-center'>
          <HugeiconsIcon icon={Store01Icon} className='w-[40px] h-[40px] text-sky-600' />
        </div>

       <div className='flex flex-col justify-center gap-3 space-y-0'>
          <h1 className='text-2xl font-bold'>56</h1>
          <span className='text-gray-500 w-1/2 text-sm'>Produtos Anunciados</span>
        </div>
      </CardContent>
    </Card>
  )
}
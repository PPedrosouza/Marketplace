import { Helmet } from 'react-helmet-async'

import { ProductsSoldCard } from './products-sold-card';
import { ProductsAdvertisedCard } from './products-adversited-card';
import { VisitorsCard } from './visitors-card';
import { VisitorsChartCard } from './visitors-chart-card';

export function Dashboard() {
    return <>
        <Helmet title="Dashboard" />

        <div className="flex flex-col gap-4 justify-center mx-4 sm:mx-8 lg:mx-36 mt-8 mb-8">
            <div className='gap-2'>
                <h1 className="text-3xl font-semibold tracking-tight">Últimos 30 dias</h1>
                <span className="text-gray-500">Confira as estatísticas da sua loja no último mês</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                <div className="flex flex-col gap-2">
                    <ProductsSoldCard />
                    <ProductsAdvertisedCard />
                    <VisitorsCard />
                </div>

                <div className="col-span-2 min-h-full">
                    <VisitorsChartCard />
                </div>
            </div>
        </div>
    </>
}
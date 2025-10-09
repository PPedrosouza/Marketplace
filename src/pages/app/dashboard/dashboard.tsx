import { Helmet } from 'react-helmet-async'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft02Icon, Cancel01Icon, Tick02Icon, UnavailableIcon, TagIcon, SaleTag01Icon, Store01Icon, UserMultipleIcon, UserMultiple02Icon } from '@hugeicons/core-free-icons';

import { ProductsSoldCard } from './products-sold-card';
import { ProductsAdvertisedCard } from './products-adversited-card';
import { VisitorsCard } from './visitors-card';
import { VisitorsGraphCard } from './visitors-graph-card';

export function Dashboard() {
    return <>
        <Helmet title="Dashboard" />

        <div className="flex flex-col gap-4 justify-center mx-4 sm:mx-8 lg:mx-36 mt-8 mb-8">
            <div className='gap-2'>
                <h1 className="text-3xl font-semibold tracking-tight">Últimos 30 dias</h1>
                <span className="text-gray-500">Confira as estatísticas da sua loja no último mês</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                {/* Coluna dos 3 cards empilhados */}
                <div className="flex flex-col gap-2">
                    <ProductsSoldCard />
                    <ProductsAdvertisedCard />
                    <VisitorsCard />
                </div>

                {/* Card que ocupa toda a altura ao lado */}
                <div className="col-span-2 min-h-full">
                    <VisitorsGraphCard />
                </div>
            </div>
        </div>
    </>
}
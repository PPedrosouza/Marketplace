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

        {/* <div className="flex flex-col justify-center">
            <div className="flex flex-col sm:flex-row lg:flex-row mt-8 mx-4 sm:mx-8 lg:mx-36 items-start sm:items-center lg:items-center max-w-7xl sm:h-auto lg:h-20 justify-between gap-4 sm:gap-4 lg:gap-2">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-semibold">Últimos 30 dias</h1>
                    <span className="text-gray-500">Confira as estatísticas da sua loja no último mês</span>
                </div>
            </div>

            <div className="grid grid-cols-3 border-2 mt-8 mx-4 sm:mx-8 lg:mx-36 items-start sm:items-center lg:items-center max-w-7xl sm:h-auto lg:h-20 justify-between gap-3 sm:gap-4 lg:gap-2">
                <div className="col-1">
                    <div className="col-2 justify-start">
                        <Card className="space-y-2 w-[239px] h-[110px] shadow-none rounded-xl items-center justify-center">
                            <CardContent className="flex flex-row tracking-wide">
                                <div className='p-4 bg-sky-100 rounded-lg mr-4 w-[80px] h-[86px] flex items-center justify-center'>
                                    <HugeiconsIcon icon={SaleTag01Icon} className='w-[40px] h-[40px] text-sky-600' />
                                </div>

                                <div className='flex flex-col justify-center'>
                                    <h1 className='text-2xl font-bold'>24</h1>
                                    <span className='text-gray-500'>Produtos Vendidos</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-2 justify-start">
                        <Card className="space-y-2 w-[239px] h-[110px] shadow-none rounded-xl items-center justify-center">
                            <CardContent className="flex flex-row tracking-wide">
                                <div className='p-4 bg-sky-100 rounded-lg mr-4 w-[80px] h-[86px] flex items-center justify-center'>
                                    <HugeiconsIcon icon={Store01Icon} className='w-[40px] h-[40px] text-sky-600' />
                                </div>

                                <div className='flex flex-col justify-center'>
                                    <h1 className='text-2xl font-bold'>56</h1>
                                    <span className='text-gray-500'>Produtos Anunciados</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-2 justify-start">
                        <Card className="space-y-2 w-[239px] h-[110px] shadow-none rounded-xl items-center justify-center">
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
                    </div>
                </div>
                <div className="col-3 justify-start">
                    <Card className="space-y-2 w-[767px] h-[360px] shadow-none rounded-xl items-center justify-center ">
                        <CardContent className="flex flex-row tracking-wide ">
                           
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div> */}

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
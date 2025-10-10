import { Helmet } from "react-helmet-async"

import { ProductsCard } from "./products-card"
import { ProductsCardFilters } from "./products-card-filters"

export function Products() {
    return (
        <>
            <Helmet title="Produtos" />

            <div className="flex flex-col justify-center mx-4 sm:mx-8 lg:mx-36 mt-8 mb-8">
                {/* flex flex-col gap-4 justify-center mx-4 sm:mx-8 lg:mx-36 mt-8 mb-8 */}
                <div className="flex flex-col w-full gap-1">
                    <h1 className="text-3xl font-semibold">Seus produtos</h1>
                    <p className="text-md text-gray-500">Acesse e gerencie a sua lista de produtos à venda</p>
                </div>

                <div className="flex flex-row gap-5 pt-5">
                    <div className="flex flex-col p-5 rounded-xl space-y-2 bg-white w-1/2 h-[306px]">
                        <h1 className="text-gray-500 font-semibold">Filtrar</h1>

                       <ProductsCardFilters />
                    </div>

                    <div className="flex flex-wrap space-y-1 gap-4 w-full">
                        {Array.from({ length: 6 }).map((_, i) => {
                            return <ProductsCard key={i} id={i} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
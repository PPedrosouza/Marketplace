import { Helmet } from "react-helmet-async"

import { ProductCard } from "./product-card"
import { ProductCardFilters } from "./product-card-filters"

export function Products() {
    return (
        <>
            <Helmet title="Produtos" />

            <div className="flex flex-col md:mt-20 md:ms-85 md:me-85 ms-45 me-45 justify-center">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-semibold">Seus produtos</h1>
                    <p className="text-md text-gray-500">Acesse e gerencie a sua lista de produtos à venda</p>
                </div>

                <div className="flex gap-5 pt-5">
                    <div className="flex flex-col p-5 rounded-xl space-y-2 bg-white w-[327px] h-[306px]">
                        <h1 className="text-gray-500 font-semibold">Filtrar</h1>

                       <ProductCardFilters />
                    </div>

                    <div className="flex flex-wrap space-y-1 gap-4 w-full">
                        {Array.from({ length: 6 }).map((_, i) => {
                            return <ProductCard key={i} id={i} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
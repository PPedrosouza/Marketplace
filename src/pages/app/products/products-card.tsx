import coach from "@/assets/images/sofa.jpg"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

interface ProductCardProps {
    id: number;
}

export function ProductsCard({ id }: ProductCardProps) {
    return (
        <Link to={`/products/${id}`}>
            <Card className="col-2 space-y-2 w-[431px] h-[350px] shadow-none rounded-xl hover:border-sky-300 hover:border-1">
                <CardHeader className="relative">
                    <img src={coach} alt="" className="w-full h-[184px] rounded-xl object-cover" />
                    <div className="absolute top-2 right-2 flex gap-2 justify-center items-center text-center">
                        <Badge className="rounded-full bg-sky-500">Anunciado</Badge>
                        <Badge className="rounded-full bg-gray-500">Móvel</Badge>
                    </div>
                </CardHeader>

                <CardContent className="flex flex-col tracking-wide">
                    <div className="flex gap-2 justify-between">
                        <h1 className="text-2xl font-semibold pt-1">Sofá</h1>
                        <h1 className="text-3xl text-gray-900 font-semibold"><small className="text-sm">R$</small> 1.200,90</h1>
                    </div>
                    <span
                        className="text-lg font-semibold text-gray-500 mt-5 pb-6 overflow-hidden leading-5 max-h-[2.5rem] line-clamp-2"
                    >
                        Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado.
                    </span>
                </CardContent>
            </Card>
        </Link>
    )
}
import { Helmet } from "react-helmet-async"

import coach from "@/assets/images/sofa.jpg"

import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"

import { useForm } from "react-hook-form"

import { HugeiconsIcon } from "@hugeicons/react"
import { Search01Icon, TagIcon } from "@hugeicons/core-free-icons"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function Products() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm()

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

                        <form className="space-y-14 pt-5">
                            <div className="space-y-4">
                                <div className="flex items-center border-b-1 focus-within:text-orange-500 transition-colors">
                                    <HugeiconsIcon icon={Search01Icon} size={24} color="currentColor" />
                                    <Input
                                        id="keyword"
                                        type="text"
                                        placeholder="Pesquisar"
                                        className="border-0 shadow-none"
                                        {...register("keyword")}
                                    />
                                </div>

                                <div className="flex items-center border-b-1 focus-within:text-orange-500 transition-colors">
                                    <HugeiconsIcon icon={TagIcon} size={24} color="currentColor" />
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="announced">Anunciado</SelectItem>
                                                <SelectItem value="disabled">Desativado</SelectItem>
                                                <SelectItem value="sold">Vendido</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <Button disabled={isSubmitting} className="w-full h-[56px]" type="submit">
                                Aplicar filtro
                            </Button>
                        </form>
                    </div>

                    <div className="flex flex-wrap space-y-1 gap-4 w-full">
                        {Array.from({ length: 6 }).map((_, i) => {
                            return (
                                <Card key={i} className="col-2 space-y-2 w-[431px] h-[350px] border-0 shadow-none rounded-xl">
                                    <CardHeader className="relative">
                                        <img src={coach} alt="" className="w-full h-[184px] rounded-xl object-cover" />
                                        <div className="absolute top-2 right-2 flex gap-2">
                                            <Badge className="rounded-full bg-sky-500">Anunciado</Badge>
                                            <Badge className="rounded-full bg-gray-500">Móvel</Badge>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="flex flex-col tracking-wide">
                                        <div className="flex gap-2 justify-between">
                                            <h1 className="text-2xl font-semibold pt-1">Sofá</h1>
                                            <h1 className="text-3xl text-gray-900 font-semibold"><small className="text-sm">R$</small> 1.200,90</h1>
                                        </div>
                                        <span className="text-md font-semibold text-gray-500 pt-5">Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado.</span>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
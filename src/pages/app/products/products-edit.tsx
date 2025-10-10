// src/pages/app/products/product-detail.jsx
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft02Icon, Cancel01Icon, Tick02Icon, UnavailableIcon, TagIcon, ImageUploadIcon } from '@hugeicons/core-free-icons';
import coach from "@/assets/images/sofa.jpg"
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { z } from 'zod'
import { toast } from "sonner"
import { useForm } from 'react-hook-form'
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const EditForm = z.object({
    title: z.string().min(2).max(100),
    price: z.number().min(0),
    description: z.string().min(10).max(1000),
    category: z.string().min(2).max(100)
})

type EditForm = z.infer<typeof EditForm>

export function ProductsEdit() {
    const { register, handleSubmit, formState: { isSubmitting }, watch } = useForm<EditForm>()
    const { id } = useParams();
    const navigate = useNavigate()

    const titleValue = watch("title")
    const priceValue = watch("price")
    const descriptionValue = watch("description")
    const categoryValue = watch("category")

    const [selectedStatus, setSelectedStatus] = useState<string>("")

    async function handleSignIn(data: EditForm) {
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000))
            console.log(data)
            navigate('/products')
            toast.success("Produto atualizado com sucesso.", {
                action: {
                    label: "Sucesso",
                    onClick: () => navigate('/products')
                }
            })
        } catch (error) {
            toast.error("Erro ao atualizar produto. Tente novamente.")
        }
    }

    return (
        <>
            <Helmet title={`Detalhes do Produto ${id}`} />

            <div className="flex flex-col justify-center">
                <div className="flex flex-col sm:flex-col lg:flex-row mt-8 mx-2 sm:mx-8 lg:mx-36 items-start sm:items-start lg:items-end max-w-10xl sm:h-auto lg:h-auto justify-between gap-4 sm:gap-2 lg:gap-2">
                    <div className="flex flex-col w-full h-auto sm:w-auto lg:w-auto lg:h-auto items-start gap-2">
                        <Link to="/products" className="text-orange-500 font-semibold flex gap-2">
                            <HugeiconsIcon icon={ArrowLeft02Icon} size={24} color="currentColor" />
                            Voltar
                        </Link>

                        <h1 className="text-3xl font-semibold">Editar produto</h1>
                        <span className="text-gray-500">Gerencie as informações do produto cadastrado</span>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-row w-full lg:w-auto gap-3 sm:gap-4 lg:gap-6">
                        <Link to="/products" className="text-orange-500 font-semibold flex gap-2">
                            <HugeiconsIcon icon={Tick02Icon} size={24} color="currentColor" />
                            Marcar como vendido
                        </Link>
                        <Link to="/products" className="text-orange-500 font-semibold flex gap-2">
                            <HugeiconsIcon icon={UnavailableIcon} size={24} color="currentColor" />
                            Desativar anúncio
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-col lg:flex-row mx-4 lg:mx-36 mt-10 mb-10 max-w-9xl gap-5">
                    <div className="flex flex-col sm:flex-row lg:flex-col w-full lg:w-[815px] h-60 lg:h-[340px] overflow-hidden rounded-3xl group relative">
                        <img src={coach} alt="" className="w-full h-full object-cover hover:opacity-50 transition-opacity duration-300" />
                        <div className="absolute inset-0 group-hover:bg-gray-900/45 transition-colors duration-300 justify-center items-center flex flex-col opacity-0 group-hover:opacity-100">
                            <HugeiconsIcon icon={ImageUploadIcon} color="currentColor" className="w-[40px] h-[40px] text-white" />
                            <span className="text-white w-1/3 text-center font-normal text-sm">Selecione a imagem do produto</span>
                        </div>
                    </div>

                    <div className="flex flex-col w-full bg-white rounded-3xl p-6">
                        <div className="flex w-full gap-2 justify-between items-center">
                            <h1 className="font-bold text-xl tracking-wider text-gray-600">Dados do produto</h1>
                            <Badge className="rounded-full bg-sky-500 border-4">Anunciado</Badge>
                        </div>

                        <form className="flex flex-col gap-4 mt-6 w-full flex-1" onSubmit={handleSubmit(handleSignIn)}>
                            <div className="flex flex-col w-2/2 lg:flex-row gap-4">
                                <div className="w-full lg:w-3/4 flex flex-col gap-2">
                                    <Label htmlFor="title" className="text-xs text-gray-600 tracking-wide uppercase">Título</Label>
                                    <div className="border-b flex items-center gap-2 transition-colors group">
                                        <Input
                                            id="title"
                                            type="text"
                                            className="border-0 shadow-none ps-1 text-start break-words w-full max-w-full"
                                            placeholder="Nome do produto"
                                            {...register("title")}
                                        />
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/4 flex flex-col gap-2">
                                    <Label htmlFor="price" className="text-xs text-gray-600 tracking-wide uppercase">Valor</Label>
                                    <div className="border-b flex items-center gap-2 transition-colors group">
                                        <InputGroup className="border-0 shadow-none ps-0 break-words w-full max-w-full">
                                            <InputGroupAddon className="ps-0 text-start">
                                                <p className="text-orange-500">R$</p>
                                            </InputGroupAddon>
                                            <InputGroupInput
                                                id="price"
                                                type="number"
                                                className="border-0 shadow-none ps-1"
                                                placeholder="0,00"
                                                {...register("price", { valueAsNumber: true })}
                                            />
                                        </InputGroup>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <Label htmlFor="description" className="text-xs text-gray-600 tracking-wide uppercase">Descrição</Label>
                                <div className="flex flex-col items-start gap-2 transition-colors group md:w-full lg:w-full border-b">
                                    <Textarea
                                        id="description"
                                        className="border-0 shadow-none resize-none min-h-[40px] max-h-[120px] ps-1 text-start break-words w-full max-w-full"
                                        placeholder="Escreva detalhes sobre o produto, tamanho, características"
                                        {...register("description")}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col w-full border-b transition-colors">
                                <div className="relative w-full">
                                    <Label htmlFor="category" className="text-xs text-gray-600 tracking-wide uppercase">Categoria</Label>

                                    <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                                        <SelectTrigger className="w-full pt-4 ps-1 pb-4 text-start border-0 shadow-none">
                                            <div className="flex items-center justify-between w-full">
                                                <SelectValue placeholder="Selecione" />
                                                {selectedStatus && (
                                                    <button
                                                        type="button"
                                                        onPointerDown={(e) => {
                                                            e.preventDefault()
                                                            e.stopPropagation()
                                                            setSelectedStatus("")
                                                        }}
                                                        className="ml-2 p-1 hover:bg-gray-100 rounded-full transition-colors z-10"
                                                    >
                                                        <HugeiconsIcon
                                                            icon={Cancel01Icon}
                                                            size={16}
                                                            className="text-muted-foreground hover:text-gray-700 pointer-events-auto"
                                                        />
                                                    </button>
                                                )}
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="toy">Brinquedo</SelectItem>
                                                <SelectItem value="furniture">Móvel</SelectItem>
                                                <SelectItem value="stationery">Papelaria</SelectItem>
                                                <SelectItem value="health-beauty">Saúde & Beleza</SelectItem>
                                                <SelectItem value="utensil">Utensílio</SelectItem>
                                                <SelectItem value="clothing">Vestuário</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>

                                    <input type="hidden" {...register("category")} value={selectedStatus} />
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row w-full gap-2 mt-auto pt-5 justify-center lg:justify-end">
                                <Button disabled={isSubmitting} className="w-full  lg:w-1/2 border-orange-500 text-orange-500" type="button" variant={"outline"}>
                                    Cancelar
                                </Button>
                                <Button disabled={isSubmitting} className="w-full  lg:w-1/2 text-white" type="submit">
                                    Salvar e atualizar
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    );
}
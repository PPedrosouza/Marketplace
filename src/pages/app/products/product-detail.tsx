// src/pages/app/products/product-detail.jsx
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft02Icon, ArrowLeftIcon, Tick02Icon, UnavailableIcon } from '@hugeicons/core-free-icons';
import coach from "@/assets/images/sofa.jpg"
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { z } from 'zod'
import { toast } from "sonner"
import { useForm } from 'react-hook-form'
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Textarea } from "@/components/ui/textarea";

const EditForm = z.object({
    title: z.string().min(2).max(100),
    price: z.number().min(0),
    description: z.string().min(10).max(1000),
    category: z.string().min(2).max(100)
})

type EditForm = z.infer<typeof EditForm>

export function ProductDetail() {
    const { register, handleSubmit, formState: { isSubmitting }, watch } = useForm<EditForm>()
    const { id } = useParams();
    const navigate = useNavigate()

    const titleValue = watch("title")
    const priceValue = watch("price")
    const descriptionValue = watch("description")
    const categoryValue = watch("category")

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
                <div className="flex flex-row @sm:flex-col mt-[32px] mx-[148px] items-center @sm:items-start max-w-[1580px] min-w-[1280px] h-[86px] justify-between">
                    <div className="w-[629px] flex flex-col items-start gap-2">
                        <Link to="/products" className="text-orange-500 font-semibold flex gap-2">
                            <HugeiconsIcon icon={ArrowLeft02Icon} size={24} color="currentColor" />
                            Voltar
                        </Link>

                        <h1 className="text-3xl font-semibold">Editar produto</h1>
                        <span className="text-gray-500">Gerencie as informações do produto cadastrado.</span>
                    </div>

                    <div className="flex md:flex-row w-[401px] h-full items-end gap-6 ">
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

                <div className="flex flex-row @sm:flex-col mx-[148px] mt-[40px] mb-10 max-w-[1580px] h-[466px] space-x-5">
                    <div className="flex w-[415px] h-[340px] overflow-hidden rounded-3xl">
                        <img src={coach} alt="" className="w-full h-full object-cover" />
                    </div>

                    <div className="flex flex-col w-[1165px] min-w-[591px] bg-white rounded-3xl p-6">
                        <div className="flex w-full h-[22px] gap-2 justify-between">
                            <h1 className="font-semibold tracking-wide text-gray-500">Dados do produto</h1>
                            <Badge className="rounded-full bg-sky-500 border-4">Anunciado</Badge>
                        </div>

                        <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit(handleSignIn)}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="title">Título</Label>
                                    <div className="flex items-center gap-2 border-b-1 transition-colors group">
                                        <Input
                                            id="title"
                                            type="text"
                                            className="border-0 shadow-none"
                                            {...register("title")}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="price">Valor</Label>
                                    <div className="border-b-1 transition-colors group">
                                        <InputGroup className="border-0 shadow-none">
                                            <InputGroupAddon>
                                                <p className="text-orange-500">R$</p>
                                            </InputGroupAddon>
                                            <InputGroupInput
                                                id="price"
                                                type="number"
                                                className="border-0 shadow-none"
                                                {...register("price", { valueAsNumber: true })}
                                            />
                                        </InputGroup>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="description">Descrição</Label>
                                <div className="border-b-1 transition-colors group">
                                    <Textarea
                                        id="description"
                                        className="border-0 shadow-none"
                                        {...register("description")}
                                    >
                                    </Textarea>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="category">Categoria</Label>
                                <div className="border-b-1 transition-colors group">
                                    <Input
                                        id="category"
                                        type="text"
                                        className="border-0 shadow-none"
                                        {...register("category")}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-row w-[535px] gap-4 mt-6">
                                <Button disabled={isSubmitting} className="w-full h-[44px] justify-center border-orange-500" type="button" variant={"outline"}>
                                    <p className="text-orange-500">Cancelar</p>
                                </Button>
                                <Button disabled={isSubmitting} className="w-full h-[44px] justify-center" type="submit">
                                    <p className="text-white">Salvar alterações</p>
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
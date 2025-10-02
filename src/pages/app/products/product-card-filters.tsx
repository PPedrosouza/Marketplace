import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { useForm } from "react-hook-form"
import { useState } from "react"

import { HugeiconsIcon } from "@hugeicons/react"
import { Cancel01Icon, Search01Icon, TagIcon } from "@hugeicons/core-free-icons"

export function ProductCardFilters() {
    const { register, formState: { isSubmitting }, watch } = useForm()
    const [selectedStatus, setSelectedStatus] = useState<string>("")
    const keywordValue = watch("keyword")

    return (
        <form className="space-y-14 pt-5">
            <div className="space-y-4">
                <div className="flex items-center border-b-1  transition-colors">
                    <HugeiconsIcon icon={Search01Icon} size={24} color="currentColor"
                        className={`transition-colors ${keywordValue ? 'text-orange-500' : 'text-muted-foreground'}`}
                    />
                    <Input
                        id="keyword"
                        type="text"
                        placeholder="Pesquisar"
                        className="group border-0 shadow-none"
                        {...register("keyword")}
                    />
                </div>

                <div className="flex items-center border-b-1 transition-colors">
                    <HugeiconsIcon
                        icon={TagIcon}
                        size={24}
                        className={`transition-colors ${selectedStatus ? 'text-orange-500' : 'text-muted-foreground'}`}
                    />
                    <div className="relative w-full">
                        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                            <SelectTrigger className="w-full border-0 shadow-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus:border-0">
                                <div className="flex items-center justify-between w-full">
                                    <SelectValue placeholder="Status" />
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
                                    <SelectItem value="all">Todos</SelectItem>
                                    <SelectItem value="announced">Anunciado</SelectItem>
                                    <SelectItem value="disabled">Desativado</SelectItem>
                                    <SelectItem value="sold">Vendido</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <Button disabled={isSubmitting} className="w-full h-[56px]" type="submit">
                Aplicar filtro
            </Button>
        </form>
    )
}
import arrowRight2 from '../../assets/icons/arrow-right-02.svg'
import mailLetter2 from '../../assets/icons/mail-02.svg'
import access from '../../assets/icons/access.svg'
import view from '../../assets/icons/view.svg'
import imageUpload from '../../assets/icons/image-upload.svg'
import user from '../../assets/icons/user.svg'
import call from '../../assets/icons/call.svg'

import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Helmet } from 'react-helmet-async'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { toast } from "sonner"
import { HugeiconsIcon } from '@hugeicons/react';
import { AccessIcon, ArrowRight02Icon, CallIcon, ImageUploadIcon, Mail02Icon, User02Icon, User03Icon, ViewIcon } from '@hugeicons/core-free-icons';
import { useState } from 'react'

const signUpForm = z.object({
    file: z
        .instanceof(FileList, { message: "A imagem do perfil é obrigatória" })
        .refine((files) => files.length > 0, "A imagem do perfil é obrigatória")
        .refine((files) => files[0]?.type === "image/png",
            "O arquivo precisa ser uma imagem PNG"),
    name: z.string(),
    telephone: z.string(),
    email: z.email(),
    password: z.string(),
    confirmPassword: z.string(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { isSubmitting }, watch } = useForm<SignUpForm>()
    const [showPassword, setShowPassword] = useState(false)

    const nameValue = watch("name")
    const telephoneValue = watch("telephone")

    const emailValue = watch("email")
    const passwordValue = watch("password")
    const confirmPasswordValue = watch("confirmPassword")

    async function handleSignUp(data: SignUpForm) {
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000))
            console.log(data)
            toast.success("Cadastro concluído com sucesso!", {
                action: {
                    label: "Login",
                    onClick: () => navigate('/sign-in')
                }
            })
        } catch (error) {
            toast.error("Credenciais inválidas. Tente novamente.")
        }
    }

    return (
        <div className="w-[563px] md:h-[696px] h-full md:m-0 m-5 bg-background rounded-lg md:overflow-y-auto overflow-y-hidden ">
            <Helmet title="Cadastro" />
            <div className="p-20">
                <div className="w-full flex flex-col justify-start items-start gap-6">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold tracking-tight text-md">Crie sua conta</h1>
                        <p className="text-sm text-muted-foreground">Informe os seus dados pessoas e de acesso</p>
                    </div>

                    <div className="w-full flex flex-col space-y-40">
                        <form className="space-y-14 w-full justify-center pt-5" onSubmit={handleSubmit(handleSignUp)}>
                            <div className="space-y-10">
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-2xl font-bold tracking-tight text-md">Perfil</h3>
                                    <label className="w-[7.5rem] aspect-square overflow-hidden bg-red-100 rounded-xl flex items-center justify-center" htmlFor="file">
                                        <HugeiconsIcon icon={ImageUploadIcon} size={24} color="currentColor" className="size-8 text-orange-500" />
                                        <Input
                                            id="file"
                                            className="hidden"
                                            type="file"
                                            {...register("file")}
                                        />
                                    </label>

                                    <Label className="text-gray-500 text-sm" htmlFor="name">NOME</Label>
                                    <div className="flex items-center gap-2 border-b-1 transition-colors">
                                        <HugeiconsIcon
                                            icon={User03Icon}
                                            size={24}
                                            color="currentColor"
                                            className={`transition-colors ${nameValue ? 'text-orange-500' : 'text-muted-foreground group-focus-within:text-orange-500'}`} />
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Seu nome completo"
                                            className="border-0 shadow-none"
                                            {...register("name")}
                                        />
                                    </div>

                                    <Label className="text-gray-500 text-sm" htmlFor="phone">TELEFONE</Label>
                                    <div className="flex items-center gap-2 border-b-1 transition-colors">
                                        <HugeiconsIcon
                                            icon={CallIcon}
                                            size={24}
                                            color="currentColor"
                                            className={`transition-colors ${telephoneValue ? 'text-orange-500' : 'text-muted-foreground group-focus-within:text-orange-500'}`}
                                        />
                                        <Input
                                            id="telephone"
                                            type="text"
                                            placeholder="(00) 00000-0000"
                                            className="border-0 shadow-none"
                                            {...register("telephone")}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <h3 className="text-2xl font-bold tracking-tight text-md">Acesso</h3>

                                    <Label className="text-gray-500 text-sm" htmlFor="email">E-MAIL</Label>
                                    <div className="flex items-center gap-2 border-b-1 transition-colors">
                                        <HugeiconsIcon
                                            icon={Mail02Icon}
                                            size={24}
                                            color="currentColor"
                                            className={`transition-colors ${emailValue ? 'text-orange-500' : 'text-muted-foreground group-focus-within:text-orange-500'}`}
                                        />
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Seu e-mail cadastrado"
                                            className="border-0 shadow-none"
                                            {...register("email")}
                                        />
                                    </div>

                                    <Label className="text-gray-500 text-sm" htmlFor="password">SENHA</Label>
                                    <div className="flex items-center gap-2 border-b-1 transition-colors">
                                        <HugeiconsIcon
                                            icon={AccessIcon}
                                            size={24}
                                            color="currentColor"
                                            className={`transition-colors ${passwordValue ? 'text-orange-500' : 'text-muted-foreground group-focus-within:text-orange-500'}`}
                                        />
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Senha de acesso"
                                            className="border-0 shadow-none"
                                            {...register("password")} />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="focus:outline-none"
                                        >
                                            <HugeiconsIcon
                                                icon={ViewIcon}
                                                size={24}
                                                color="currentColor"
                                                className={`transition-colors ${showPassword ? 'text-orange-500' : 'text-muted-foreground group-focus-within:text-orange-500'}`}
                                            />
                                        </button>
                                    </div>

                                    <Label className="text-gray-500 text-sm" htmlFor="password">CONFIRMAR SENHA</Label>
                                    <div className="flex items-center gap-2 border-b-1 transition-colors">
                                        <HugeiconsIcon
                                            icon={AccessIcon}
                                            size={24}
                                            color="currentColor"
                                            className={`transition-colors ${confirmPasswordValue ? 'text-orange-500' : 'text-muted-foreground group-focus-within:text-orange-500'}`}
                                        />
                                        <Input
                                            id="confirmPassword"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Confirme a senha"
                                            className="border-0 shadow-none"
                                            {...register("confirmPassword")} />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="focus:outline-none"
                                        >
                                            <HugeiconsIcon
                                                icon={ViewIcon}
                                                size={24}
                                                color="currentColor"
                                                className={`transition-colors ${showPassword ? 'text-orange-500' : 'text-muted-foreground group-focus-within:text-orange-500'}`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <Button disabled={isSubmitting} className="w-full h-[44px] justify-between" type="submit">
                                <p className="text-white">Cadastrar</p>
                                <HugeiconsIcon icon={ArrowRight02Icon} size={24} color="currentColor" />
                            </Button>
                        </form>

                        <footer className="w-full h-[44px] flex flex-col space-y-3">
                            <p className="text-gray-500 text-md">Já tem uma conta?</p>
                            <Button className="w-full h-[44px] justify-between border-orange-500" variant="outline">
                                <Link to='/sign-in' className="text-orange-500">Acessar</Link>
                                <HugeiconsIcon icon={ArrowRight02Icon} size={24} color="currentColor" className='text-orange-500' />
                            </Button>
                        </footer>
                    </div>

                </div>
            </div>
        </div>
    )
}
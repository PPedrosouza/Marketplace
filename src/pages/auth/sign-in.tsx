import arrowRight2 from '../../assets/icons/arrow-right-02.svg'
import mailLetter2 from '../../assets/icons/mail-02.svg'
import access from '../../assets/icons/access.svg'
import view from '../../assets/icons/view.svg'

import { Button } from '@/components/ui/button'
import { Helmet } from 'react-helmet-async'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { toast } from "sonner"
import { Link } from 'react-router-dom'

const signInForm = z.object({
    email: z.email(),
    password: z.string()
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>()

    async function handleSignIn(data: SignInForm) {
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000))
            console.log(data)
            toast.success("Enviamos um link de autenticação para seu e-mail.", {
                action: {
                    label: "Reenviar",
                    onClick: () => handleSignIn(data)
                }
            })
        } catch (error) {
            toast.error("Credenciais inválidas. Tente novamente.")
        }
    }

    return (
        <div className="w-[563px] h-[696px] bg-background rounded-lg">
            <Helmet title="Login" />
            <div className="p-20">
                <div className="w-full flex flex-col justify-start items-start gap-6">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold tracking-tight text-md">Acesse sua conta</h1>
                        <p className="text-sm text-muted-foreground">Informe seu e-mail e senha para entrar</p>
                    </div>

                    <div className="w-full flex flex-col space-y-40">
                        <form className="space-y-14 w-full justify-center pt-5" onSubmit={handleSubmit(handleSignIn)}>
                            <div className="space-y-2">
                                <Label className="text-gray-500 text-sm">E-MAIL</Label>
                                <div className="flex items-center gap-2 border-b-1">
                                    <img src={mailLetter2} alt="" className="w-6 h-6" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Seu e-mail cadastrado"
                                        className="border-0 shadow-none"
                                        {...register("email")}
                                    />
                                </div>

                                <Label className="text-gray-500 text-sm">SENHA</Label>
                                <div className="flex items-center gap-2 border-b-1">
                                    <img src={access} alt="" className="w-6 h-6" />
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Senha de acesso"
                                        className="border-0 shadow-none"
                                        {...register("password")} />
                                    <img src={view} alt="" className="w-6 h-6" />
                                </div>
                            </div>

                            <Button disabled={isSubmitting} className="w-full h-[44px] justify-between" type="submit">
                                <p className="text-white">Acessar</p>
                                <img src={arrowRight2} alt="arrow-right" className="w-6 h-6 text-white" />
                            </Button>
                        </form>

                        <footer className="w-full h-[44px] flex flex-col space-y-3">
                            <p className="text-gray-500 text-md">Ainda não tem uma conta?</p>
                            <Button className="w-full h-[44px] justify-between border-orange-500" variant="outline">
                                <Link to='/sign-up' className="text-orange-500">Cadastrar</Link>
                                <img src={arrowRight2} alt="arrow-right" className="w-6 h-6" />
                            </Button>
                        </footer>
                    </div>

                </div>
            </div>
        </div>
    )
}
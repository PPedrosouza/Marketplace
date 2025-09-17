import { Button } from '@/components/ui/button'
import { Helmet } from 'react-helmet-async'
import arrowRight2 from '../../assets/icons/arrow-right-02.svg'
import mailLetter2 from '../../assets/icons/mail-02.svg'
import access from '../../assets/icons/access.svg'
import view from '../../assets/icons/view.svg'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export function SignIn() {
    return (
        <div className="w-[563px] h-[696px] bg-background rounded-lg">
            <Helmet title="Login" />
            <div className="p-20">
                <div className="w-full flex flex-col justify-start items-start gap-6">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold tracking-tight text-md">Acesse sua conta</h1>
                        <p className="text-sm text-muted-foreground">Informe seu e-mail e senha para entrar</p>
                    </div>

                    <form className="space-y-4 w-full justify-center pt-10 pb-3">
                        <div className="space-y-2">
                            <Label className="text-gray-500 text-sm">E-MAIL</Label>
                            <div className="flex items-center gap-2 border-b-1">
                                <img src={mailLetter2} alt="" className="w-6 h-6" />
                                <Input type="email" placeholder="Seu e-mail cadastrado" className="border-0 shadow-none" />
                            </div>

                            <Label className="text-gray-500 text-sm">SENHA</Label>
                            <div className="flex items-center gap-2 border-b-1">
                                <img src={access} alt="" className="w-6 h-6" />
                                <Input type="password" placeholder="Sua senha de acesso" className="border-0 shadow-none"></Input>
                                <img src={view} alt="" className="w-6 h-6" />
                            </div>
                        </div>

                    </form>

                    <Button className="w-full h-[44px] justify-between" type="submit">
                        <p className="text-white">Acessar</p>
                        <img src={arrowRight2} alt="arrow-right" className="w-6 h-6 text-white" />
                    </Button>

                    <footer className="w-full h-[44px] justify-between mt-30">
                        <p className="text-gray-500 text-md">Ainda não tem uma conta?</p>
                        <Button className="w-full h-[44px] justify-between">
                            <p>Cadastrar</p>
                            <img src={arrowRight2} alt="arrow-right" className="w-6 h-6" />
                        </Button>
                    </footer>
                </div>
            </div>
        </div>
    )
}
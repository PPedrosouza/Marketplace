import { Outlet } from 'react-router-dom'
import marketplaceLogo from '../../assets/icons/marketplace-logo.svg'
import firstPageImage from '../../assets/images/first-page-image.png'

export function AuthLayout() {
    return (
        <div className="min-h-screen md:grid md:grid-cols-2 antialiased">
            <div className="h-full bg-muted p-10 text-muted-foreground flex flex-col">
                <div className="flex items-center gap-3 text-lg text-foreground md:justify-start justify-center" >
                    <img src={marketplaceLogo} alt="marketplaceLogo" />
                    <div className="grid grid-cols-1 -red-500">
                        <h1 className="font-semibold">Marketplace</h1>
                        <span>Painel de Vendedor</span>
                    </div>
                </div>
                <div className="md:flex flex-2 items-center justify-end hidden">
                    <img className="" src={firstPageImage} alt="firstPageImage" />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-muted flex-1">
                <Outlet />
            </div>
        </div>
    )
}
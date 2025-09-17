import { Outlet } from 'react-router-dom'
import marketplaceLogo from '../../assets/icons/marketplace-logo.svg'
import firstPageImage from '../../assets/images/first-page-image.png'

export function AuthLayout() {
    return (
        <div className="min-h-screen grid grid-cols-2">
            <div className="h-full bg-muted p-10 text-muted-foreground flex flex-col">
                <div className="flex items-center gap-3 text-lg text-foreground " >
                    <img src={marketplaceLogo} alt="marketplaceLogo" />
                    <div className="grid grid-cols-1 -red-500">
                        <h1 className="font-semibold">Marketplace</h1>
                        <span >Painel de Vendedor</span>
                    </div>
                </div>
                <div className="flex flex-2 items-center justify-end">
                    <img className="" src={firstPageImage} alt="firstPageImage" />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-muted">
                <Outlet />
            </div>
        </div>
    )
}
import { Link } from 'react-router-dom'
import marketplaceLogo from '../assets/icons/marketplace-logo.svg'
import chartHistogram from '../assets/icons/chart-histogram.svg'
import packageIcon from '../assets/icons/package.svg'

export function Header() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center gap-6 px-6">
                <img src={marketplaceLogo} alt="marketplaceLogo" className='h-15 w-15' />

                {/* <Separator orientation='vertical' className='h-6' /> */}

                <nav className='flex items-center space-x-4 lg:space-x-6'>
                    <Link to="/">
                        <img src={chartHistogram} alt="" className="w-4 h-4" />
                        Dashboard
                    </Link>
                    <Link to="/">
                        <img src={packageIcon} alt="" className="w-4 h-4" />
                        Produtos
                    </Link>
                </nav>
            </div>
        </div>
    )
}
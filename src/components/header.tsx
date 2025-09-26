import { Link } from 'react-router-dom'
import marketplaceLogo from '../assets/icons/marketplace-logo.svg'
import chartHistogram from '../assets/icons/chart-histogram.svg'
import packageIcon from '../assets/icons/package.svg'
import { NavLink } from './nav-link'

import { HugeiconsIcon } from '@hugeicons/react';
import { PackageIcon } from '@hugeicons/core-free-icons';
import { ChartHistogramIcon } from '@hugeicons/core-free-icons';
import { PlusSignIcon } from '@hugeicons/core-free-icons';
import { Button } from './ui/button'

export function Header() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center gap-6 px-6">
                <img src={marketplaceLogo} alt="marketplaceLogo" className='h-15 w-15' />

                <nav className='ml-auto flex items-center gap-4'>
                    <NavLink to="/">
                        <HugeiconsIcon icon={ChartHistogramIcon} size={24} color="currentColor" />
                        Dashboard
                    </NavLink>
                    <NavLink to="/products">
                        <HugeiconsIcon icon={PackageIcon} size={24} color="currentColor" />
                        Produtos
                    </NavLink>
                </nav>

                <div className='ml-auto flex items-center gap-4'>
                    <Button className="bg-orange-500 w-[157px] h-[40px]">
                        <HugeiconsIcon icon={PlusSignIcon} size={24} color="currentColor"  />
                        Novo Produto
                    </Button>

                    <img src="https://github.com/PPedrosouza.png" className='h-10 w-10 rounded-xl border-1 border-gray-100' />
                </div>
            </div>
        </div>
    )
}
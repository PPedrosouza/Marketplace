import marketplaceLogo from '../assets/icons/marketplace-logo.svg'
import { NavLink } from './nav-link'

import { HugeiconsIcon } from '@hugeicons/react';
import { PackageIcon } from '@hugeicons/core-free-icons';
import { ChartHistogramIcon } from '@hugeicons/core-free-icons';
import { PlusSignIcon } from '@hugeicons/core-free-icons';
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div className="border-b bg-red-50">
            <div className="flex h-16 items-center justify-center text-center gap-6 px-6">
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
                    <Link to="/products/create">
                        <Button className="bg-orange-500 w-[157px] h-[40px]">
                            <HugeiconsIcon icon={PlusSignIcon} size={24} color="currentColor" />
                            Novo Produto
                        </Button>
                    </Link>

                    <Avatar className='h-10 w-10 rounded-xl border-1 border-gray-100'>
                        <AvatarImage
                            src="https://github.com/PPedrosouza.png"
                            alt="@PPedrosouza"
                        />
                        <AvatarFallback>Avatar</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    )
}
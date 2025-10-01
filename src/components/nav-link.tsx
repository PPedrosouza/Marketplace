import { Link, useLocation, type LinkProps } from "react-router-dom"

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
    const { pathname } = useLocation()

    return (
        <Link 
            data-current={pathname === props.to}
            {...props}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground
            p-3 rounded-xl data-[current=true]:bg-red-100 data-[current=true]:text-orange-500" 
        />
    )
}
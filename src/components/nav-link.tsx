import { Link, type LinkProps } from "react-router-dom"

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
    return (
        <Link {...props}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-orange-500 hover:bg-red-50 p-3 rounded-xl"
        />
    )
}
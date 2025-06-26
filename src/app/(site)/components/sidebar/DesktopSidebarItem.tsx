'use client';

import clsx from 'clsx'
import Link from 'next/link'

interface DesktopSidebarItemProps {
    href: string;
    label: string;
    icon:any;
    active?: boolean;
    onClick?: () => void // it is an optional function
}


const DesktopSidebarItem: React.FC<DesktopSidebarItemProps> = ({
    label,
    icon: Icon,
    href,
    active,
    onClick, 
}) => {

    // what it is, just a Click?!
    const handleClick = () => {
        if (onClick) {
            onClick()
        }
    }


    return (
       <li onClick={handleClick} title={label}> 
       {/* why do we use <li> here? */}
        <Link
            href={href}
            className={clsx(
                'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 hover:text-black hover:bg-gray-100',
                active && 'bg-gray-100 text-black'
            )}
        >
            <Icon className="h-6 w-6 shrink-0" />
            <span>{label}</span>
        </Link>
        <Icon className="h-6 w-6 shrink-0" />
       </li>
    )
}


export default DesktopSidebarItem
// main function
// 1. 
// it import DesktopSidebarItem, 
// then iterates over the array returned by useRoutes and for each route it creates a DesktopSidebarItem component
// 2. SettingsModal

'use client'
import { User } from '@prisma/client'; // ??
import { useState } from 'react';

import useRoutes from '../../../hooks/useRoutes'
import DesktopSidebarItem from "./DesktopSidebarItem"
import SettingsModal from './SettingsModal'
// import Avatar from '../Avatar';


interface DesktopSidebarProps {
    currentUser:User;
    // from '@prisma/client'
    // model User {
    // id        String   @id @default(cuid())
    // name      String
    // email     String   @unique
    // createdAt DateTime @default(now())
    // updatedAt DateTime @updatedAt
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <SettingsModal
                currentUser={currentUser}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />

            <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between">
                <nav className="mt-4 flex flex-col justify-between">
                    <ul role="list" className="flex flex-col items-center space-y-1">
                        {/*  iterates over the array returned by useRoutes and for each route it creates a DesktopSidebarItem component */}
                        {routes.map((route)=> (
                            <DesktopSidebarItem
                                key={route.label}
                                href={route.href}
                                label={route.label}
                                icon={route.icon}
                                active={route.active}
                                onClick={route.onClick}
                            />
                        ))}

                    </ul>
                </nav>

                <nav>
                    <div>
                        
                    </div>
                </nav>
            </div>
        </>
    )

}

export default DesktopSidebar; 

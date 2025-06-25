'use client'
import { User } from '@prisma/client'; // ??

import useRoutes from '../../../hook/useRoutes'
import DesktopSidebarItem from "./DesktopSidebarItem"


interface DesktopSidebarProps {
    currenUser:User;
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

    return (
        <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between">
            <nav className="mt-4 flex flex-col justify-between">
                <ul role="list" className="flex flex-col items-center space-y-1">
                    {routes}

                </ul>
            </nav>
        </div>
    )

}

export default DesktopSidebar; 

// import getCurrentUser from '@/app/actions/getCurrentUser'
import DesktopSidebar from './DesktopSidebar'
// import MobileFooter from './MobileFooter'

async function Sidebar({children}:{children: React.ReactNode}) {

    // const currentUser = await getCurrentUser();
    
    // Temporary mock user object for testing
    const currentUser = {
        id: "1",
        name: "Xianjun Yang",
        email: "test@example.com",
        emailVerified: null,
        image: null,
        hashedPassword: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        conversationIds: [],
        seenMessageIds: [],
    };

    return (
        <div className="h-full">
            <DesktopSidebar currentUser={currentUser} />
            {/* <MobileFooter /> */}
            <main className="lg:pl-20 h-full">{children}</main>
        </div>
    )
}

export default Sidebar

// 1. is the children a input parameter for the functioon Sidebar??
// 2. if so does it mean after Sidebar was imported into other component it will be <Sidebar (test) />, so the test is the parameter?

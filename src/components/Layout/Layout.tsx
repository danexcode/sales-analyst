import { Topbar } from "./Topbar/Topbar";
import { Footer } from "./Footer/Footer";
import { Sidebar } from "./Sidebar/Sidebar";

import { ChildContainerProps } from "app/types";

const Layout = ({ children }: ChildContainerProps) => {
    return (
        <>
            <div className="layout-wrapper layout-static">
                <Topbar/>
                <div className="layout-sidebar">
                    <Sidebar />
                </div>
                <div className="layout-main-container">
                    <div className="layout-main">{children}</div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout;
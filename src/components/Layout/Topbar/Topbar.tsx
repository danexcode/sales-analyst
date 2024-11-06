import Link from "next/link";

export const Topbar = () => {

    return (
        <div className="layout-topbar">
            <div className="layout-topbar-button">
                <i className="pi pi-bars" />
            </div>

            <div className="layout-menu-buttons">
                <div className="layout-topbar-button">
                    <i className="pi pi-calendar"></i>
                    <span>Calendar</span>
                </div>
                <div className="layout-topbar-button">
                    <i className="pi pi-user"></i>
                    <span>Profile</span>
                </div>
                <Link href="/documentation">
                    <div className="layout-topbar-button">
                        <i className="pi pi-cog"></i>
                        <span>Settings</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
        
import Image from "next/image"
import Link from "next/link";

import { Menu } from '../Menu';

export const Sidebar = () => {
    return (
        <>
            <Link href="/" className="layout-sidebar-logo">
                <Image 
                    src={"/logo.png"}
                    alt="logo" 
                    width={35}
                    height={35}
                />
                <span>Panaderia</span>
            </Link>
            <Menu />
        </>
        
    );
};


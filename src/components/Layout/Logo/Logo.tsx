import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        <div className="layout-sidebar-logo">
            <Link href="/">
                    <Image 
                        src={"/logo.png"}
                        alt="logo" 
                        width={35}
                        height={35}
                    />
                    <span>PanGourmet</span>
            </Link>
        </div>
        
    )
}
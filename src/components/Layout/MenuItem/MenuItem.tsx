import { AppMenuItemProps } from "app/types";
import Link from "next/link";
import { Ripple } from "primereact/ripple";

export const Menuitem = (props: AppMenuItemProps) => {

    const item = props.item;
    const key = props.parentKey;
    
    const submenu = item?.items && (
        <div className="layout-submenu">
            <ul className="">
                {item.items.map((child, i) => {
                    return (
                        <Menuitem 
                            item={child}
                            root={false}
                            index={i}
                            className={child.badgeClass}
                            parentKey={key}
                            key={item.label}
                        />
                    )        
                })}
            </ul>
        </div>
    )

    return (
        <li className="layout-root-menuitem">
            {props.root && <div className="layout-menuitem-root-text">{item?.label}</div>}

            {item?.to ? (
                <div>
                    <Link href={item.to} className={`${item?.class} p-ripple`}>
                        <i className={`layout-menuitem-icon ${item?.icon}`}></i>
                        <span className="layout-menuitem-text">{item?.label}</span>
                        {item!.items && <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>}
                        <Ripple />
                    </Link>

                </div>
            ) : null}
            
            {submenu}
        </li>
    )
}
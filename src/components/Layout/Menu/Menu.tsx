import { AppMenuItem } from "app/types"
import { Menuitem } from "../MenuItem/MenuItem"

export const Menu = () => {
    const model: AppMenuItem[] = [
        {
            label:"Proyecciones",
            items: [
                { label: "General", icon: "pi pi-fw pi-chart-bar", to: "/" },
                { label: "Abiertas", icon: "pi pi-fw pi-share-alt", to: "/transacciones/abiertas" },
                { label: "Cerradas", icon: "pi pi-fw pi-check-square", to: "/transacciones/cerradas" }
            ]
        },
        {
            label:"Reportes",
            items: [
                { label: "General", icon: "pi pi-fw pi-user", to: "/clientes" },
                { label: "Crear", icon: "pi pi-fw pi-pencil", to: "/clientes" }
            ]
        }
    ]

    return (
        <div className="">
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return <Menuitem 
                                item={item} 
                                root={true} 
                                index={i}
                                key={item.label}
                            />
                })}
            </ul>
        </div>
    )
}
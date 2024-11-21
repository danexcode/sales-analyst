import { AppMenuItem } from "app/types"
import { Menuitem } from "../MenuItem/MenuItem"

export const Menu = () => {
    const model: AppMenuItem[] = [
        {
            label:"Proyecciones y Metas",
            items: [
                { label: "General", icon: "pi pi-fw pi-chart-bar", to: "/proyecciones" },
                { label: "Metas", icon: "pi pi-fw pi-share-alt", to: "/proyecciones/metas" },
                { label: "Completadas", icon: "pi pi-fw pi-check-square", to: "/proyecciones/completadas" }
            ]
        },
        {
            label:"Recetas",
            items: [
                { label: "General", icon: "pi pi-fw pi-user", to: "/recetas" },
                { label: "Ingredientes", icon: "pi pi-fw pi-pencil", to: "/recetas/ingredientes" }
            ]
        },
        {
            label:"Reportes",
            items: [
                { label: "General", icon: "pi pi-fw pi-user", to: "/reportes" },
                { label: "Crear", icon: "pi pi-fw pi-pencil", to: "/reportes/crear" }
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
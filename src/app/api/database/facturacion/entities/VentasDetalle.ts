import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class VentasDetalle {
    @PrimaryGeneratedColumn()
    id_vts: number | undefined
    
    @Column()
    folio: number | undefined

    @Column()
    cantidad: number | undefined

    @Column()
    codigo: string | undefined

    @Column()
    almacen: number | undefined

    @Column()
    precio: number | undefined

    @Column()
    subtotal: number | undefined

    @Column()
    fecha: Date | undefined

    @Column()
    cancelado: boolean | undefined

    @Column()
    cve_vendedor: string | undefined

    @Column()
    observaciones: string | undefined

    @Column()
    hora: Date | undefined
}
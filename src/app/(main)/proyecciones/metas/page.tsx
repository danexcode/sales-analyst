"use client"
import { useState } from "react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { ProgressBar } from "primereact/progressbar";

export default function ProyeccionesAbiertas(){
    const [selectedTemp, setSelectedCTemp] = useState(null);
    const temporalities = [
        { name: 'Hoy', code: 'Hoy' },
        { name: 'Diario', code: 'Diario' },
        { name: 'Semanal', code: 'Semanal' },
        { name: 'Mensual', code: 'Mensual' },
        { name: 'Trimestral', code: 'Trimestral' },
        { name: 'Anual', code: 'Anual' },
    ];

    return (
        <div>
            <div className='home-menu-section'>
                <div>
                    <Button className='create-button' label='Crear' icon="pi pi-plus"></Button>
                </div>
                <Dropdown value={selectedTemp} onChange={(e) => setSelectedCTemp(e.value)} options={temporalities} optionLabel="name" 
                placeholder="Temporalidad" className="home-temp-select"/>
            </div>
            <h3>Ventas de Panes</h3>
            <div className="grid">
                <div className="card">
                    <div>
                        <h5>Pan Frances</h5>
                    </div>
                    <ProgressBar value={60}></ProgressBar>
                </div>
                <div className="card">
                    <div>
                        <h5>Pan Colombiano</h5>
                    </div>
                    <ProgressBar value={60}></ProgressBar>
                </div>
            </div>
            <h3>Utilidad</h3>
            <div className="grid">
                <div className="card">
                    <div>
                        <h5>Pan Frances</h5>
                    </div>
                    <ProgressBar value={60}></ProgressBar>
                </div>
            </div>
        </div>
    )
}
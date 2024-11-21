"use client"
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

export default function StackedBarDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    const [selectedType, setSelectedType] = useState(null);
    const projectionTypes = [
        { name: 'Producto', code: 'Hoy' },
        { name: 'Ventas', code: 'Diario' },
        { name: 'Utilidades', code: 'Semanal' },
        { name: 'Ingredientes', code: 'Mensual' },
        { name: 'Gastos', code: 'Trimestral' },
    ];

    const [selectedTemp, setSelectedCTemp] = useState(null);
    const temporalities = [
        { name: 'Hoy', code: 'Hoy' },
        { name: 'Diario', code: 'Diario' },
        { name: 'Semanal', code: 'Semanal' },
        { name: 'Mensual', code: 'Mensual' },
        { name: 'Trimestral', code: 'Trimestral' },
        { name: 'Anual', code: 'Anual' },
    ];

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Dataset 1',
                    backgroundColor: documentStyle.getPropertyValue('--green-900'),
                    data: [50, 25, 12, 48, 90, 76, 42]
                },
                {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: documentStyle.getPropertyValue('--primary-500'),
                    data: [21, 84, 24, 75, 37, 65, 34]
                },
                {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: documentStyle.getPropertyValue('--red-300'),
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div>
            <div className='home-menu-section'>
                <div>
                    <Button className='create-button' label='Crear' icon="pi pi-plus"></Button>
                    <Dropdown value={selectedType} onChange={(e) => setSelectedType(e.value)} options={projectionTypes} optionLabel="name" 
                    placeholder="Tipo" className="home-temp-select"/>
                </div>
                <Dropdown value={selectedTemp} onChange={(e) => setSelectedCTemp(e.value)} options={temporalities} optionLabel="name" 
                placeholder="Temporalidad" className="home-temp-select"/>
            </div>
            <div className="card">
                <h5>Proyeccion de Ventas de Pan Frances </h5>
                <Chart type="bar" data={chartData} options={chartOptions} />
            </div>
        </div>
    )
}
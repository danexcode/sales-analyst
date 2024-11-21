"use client"
import React, { useState } from "react";

import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import { ProgressBar } from 'primereact/progressbar';
import { Divider } from 'primereact/divider';
import { Dropdown } from 'primereact/dropdown';

export default function Home(){
    const [selectedTemp, setSelectedCTemp] = useState(null);
    const temporalities = [
        { name: 'Hoy', code: 'Hoy' },
        { name: 'Diario', code: 'Diario' },
        { name: 'Semanal', code: 'Semanal' },
        { name: 'Mensual', code: 'Mensual' },
        { name: 'Trimestral', code: 'Trimestral' },
        { name: 'Anual', code: 'Anual' },
    ];

    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#F59E0B',
                borderColor: '#F59100',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: '#FBD596',
                borderColor: '#FBD590',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    const pieData = {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [540, 325, 702],
                backgroundColor: [
                    '#FDE8C4', 
                    "#F7B039", 
                    '#AC6F08'
                ],
                hoverBackgroundColor: [
                    '#FDE8C4', 
                    "#F7B039", 
                    '#AC6F08'
                ]
            }
        ]
    }

    return (
        <div className='home-container'>
            <section className="home-menu-section">
            <Dropdown value={selectedTemp} onChange={(e) => setSelectedCTemp(e.value)} options={temporalities} optionLabel="name" 
                placeholder="Temporalidad" className="home-temp-select"/>
            </section>
            
            <div className="home-grid">
                <Card>
                    <div className='home-card'>
                        <div>
                            <h5>Ventas</h5>
                            <span>102</span>
                            <div>
                                <p>+12%</p>
                            </div>
                        </div> 
                        <div className='home-icon'>
                            <i className="pi pi-shopping-cart" />
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className='home-card'>
                        <div>
                            <h5>Ganancias</h5>
                            <span>243.2$</span>
                            <div>
                                <p>+5%</p>
                            </div>
                        </div> 
                        <div className='home-icon'>
                            <i className="pi pi-chart-line" />
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className='home-card'>
                        <div>
                            <h5>Compra Media</h5>
                            <span>6.43$</span>
                            <div>
                                <p>-2%</p>
                            </div>
                        </div> 
                        <div className='home-icon'>
                            <i className="pi pi-sort-amount-up" />
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className='home-card'>
                        <div>
                            <h5>Clientes</h5>
                            <span>90</span>
                            <div>
                                <p>+5%</p>
                            </div>
                        </div> 
                        <div className='home-icon'>
                            <i className="pi pi-users" />
                        </div>
                    </div>
                </Card>

                <Card className='chart'>
                    <h5>Ventas por Mes</h5>
                    <Chart type="bar" data={barData}></Chart>
                </Card>

                <Card className='pie-chart'>
                    <h5>Productos mas vendidos</h5>
                    <Chart className='pie' type="pie" data={pieData}></Chart>
                </Card>

                <Card className='progress-micro'>
                    <h5>Meta Diaria</h5>
                    <Divider />
                    <div className='progress-bar'>
                        <h6>Pan frances</h6>
                        <ProgressBar value={50}></ProgressBar>
                    </div>
                    <div className='progress-bar'>
                        <h6>Pan Dulce</h6>
                        <ProgressBar value={25}></ProgressBar>
                    </div>
                    <div className='progress-bar'>
                        <h6>Pan de queso</h6>
                        <ProgressBar value={80}></ProgressBar>
                    </div>
                </Card>

                <Card className='progress-macro'>
                    <h5>Meta Mensual</h5>
                    <Divider />
                    <div className='progress-bar'>
                        <h6>Pan frances</h6>
                        <ProgressBar value={30}></ProgressBar>
                    </div>
                    <div className='progress-bar'>
                        <h6>Pan Dulce</h6>
                        <ProgressBar value={15}></ProgressBar>
                    </div>
                    <div className='progress-bar'>
                        <h6>Pan de queso</h6>
                        <ProgressBar value={60}></ProgressBar>
                    </div>
                </Card>
            </div>
        </div>
    )
}
"use client";
import React, { useEffect, useState } from "react";

import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
import { ProgressBar } from "primereact/progressbar";
import { Divider } from "primereact/divider";
import { Dropdown } from "primereact/dropdown";
import { DashboardData, getDashboardData } from "app/services/dashboard.fetch";

export default function Home() {
  const [selectedTemp, setSelectedCTemp] = useState({
    name: "Semana",
    code: "Semana",
  });
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  const temporalities = [
    { name: "Actual", code: "Actual" },
    { name: "Semana", code: "Semana" },
    { name: "Mes", code: "Mes" },
  ];

  const fetchDashboardData = async () => {
    try {
      //setLoading(true);
      console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF")
      const data = await getDashboardData(selectedTemp.code);
      console.log(data);
      setDashboardData(data);
    } catch (error) {
      console.error("Error loading dashboard data:", error);
    } finally {
      //setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {fetchDashboardData();})()
  }, [selectedTemp]);

  const barData = {
    labels: [
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
      "Domingo",
    ],
    datasets: [
      {
        label: "Facturación",
        backgroundColor: "#F59E0B",
        borderColor: "#F59100",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "Utilidad",
        backgroundColor: "#FBD596",
        borderColor: "#FBD590",
        data: [28, 48, 40, 19, 36, 27, 20],
      },
    ],
  };

  console.log("pieData..........")
  const pieData = {
    labels: dashboardData?.topProducts?.labels || ['A', 'B', 'C'],
    datasets: [
      {
        data: dashboardData?.topProducts?.data || [540, 325, 702],
        backgroundColor: ["#FDE8C4", "#F7B039", "#AC6F08"],
        hoverBackgroundColor: ["#FDE8C4", "#F7B039", "#AC6F08"],
      },
    ],
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("dashboardData..........")
  console.log(dashboardData)

  return (
    <div className="home-container">
      <section className="home-menu-section">
        <Dropdown
          value={selectedTemp}
          onChange={(e) => setSelectedCTemp(e.value)}
          options={temporalities}
          optionLabel="name"
          placeholder="Temporalidad"
          className="home-temp-select"
        />
      </section>

      <div className="home-grid">
        <Card>
          <div className="home-card">
            <div>
              <h5>Ventas</h5>
              <span>{dashboardData?.sales || 102}</span>
              <div>
                <p>+12%</p>
              </div>
            </div>
            <div className="home-icon">
              <i className="pi pi-shopping-cart" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="home-card">
            <div>
              <h5>Facturación</h5>
              <span>{dashboardData?.revenue || 524.6}$</span>
              <div>
                <p>+5%</p>
              </div>
            </div>
            <div className="home-icon">
              <i className="pi pi-chart-line" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="home-card">
            <div>
              <h5>Ticket Medio</h5>
              <span>{dashboardData?.averageTicket || 8.56}$</span>
              <div>
                <p>-2%</p>
              </div>
            </div>
            <div className="home-icon">
              <i className="pi pi-sort-amount-up" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="home-card">
            <div>
              <h5>Utilidad</h5>
              <span>{dashboardData?.profit || 178.6}$</span>
              <div>
                <p>+5%</p>
              </div>
            </div>
            <div className="home-icon">
              <i className="pi pi-users" />
            </div>
          </div>
        </Card>

        <Card className="chart">
          <h5>$ Ventas</h5>
          <Chart type="bar" data={barData}></Chart>
        </Card>

        <Card className="pie-chart">
          <h5>Productos mas vendidos</h5>
          <Chart className="pie" type="pie" data={pieData}></Chart>
        </Card>

        <Card className="progress-micro">
          <h5>Meta Diaria</h5>
          <Divider />
          <div className="progress-bar">
            <h6>Pan frances</h6>
            <ProgressBar value={50}></ProgressBar>
          </div>
          <div className="progress-bar">
            <h6>Pan Dulce</h6>
            <ProgressBar value={25}></ProgressBar>
          </div>
          <div className="progress-bar">
            <h6>Pan de queso</h6>
            <ProgressBar value={80}></ProgressBar>
          </div>
        </Card>

        <Card className="progress-macro">
          <h5>Meta Mensual</h5>
          <Divider />
          <div className="progress-bar">
            <h6>Pan frances</h6>
            <ProgressBar value={30}></ProgressBar>
          </div>
          <div className="progress-bar">
            <h6>Pan Dulce</h6>
            <ProgressBar value={15}></ProgressBar>
          </div>
          <div className="progress-bar">
            <h6>Pan de queso</h6>
            <ProgressBar value={60}></ProgressBar>
          </div>
        </Card>
      </div>
    </div>
  );
}

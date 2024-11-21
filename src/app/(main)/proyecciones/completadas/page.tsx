import { Divider } from "primereact/divider";
import { ProgressBar } from "primereact/progressbar";

export default function ProyeccionesCerradas(){
    return (
        <div>
            Metas Cerradas
            <div className="goal-container">
                <div className="card goal-closed">
                    <h5>Pan Canilla</h5>
                    01/12/2022 - 31/12/2023
                    <Divider />
                    <ProgressBar value={95}></ProgressBar>
                </div>
                <div className="card goal-closed">
                    <h5>Pan Frances</h5>
                    01/12/2022 - 31/12/2023
                    <Divider />
                    <ProgressBar value={82}></ProgressBar>
                </div>
                <div className="card goal-closed">
                    <h5>Pan Canilla</h5>
                    01/12/2022 - 31/12/2023
                    <Divider />
                    <ProgressBar value={115}></ProgressBar>
                </div>
            </div>
        </div>
    )
}
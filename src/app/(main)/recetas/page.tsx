import Image from "next/image";

export default function Recetas(){
    return (
        <div>
            <div>
                <div className="card">
                    <Image 
                        src={"/frances.png"}
                        width={50}
                        height={50}
                        alt="Pan Frances"
                    />
                </div>
            </div>
        </div>
    )
}

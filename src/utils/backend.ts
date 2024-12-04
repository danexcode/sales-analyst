
export const getTemporalityDate = (temporality: string) => {
    const startDate = new Date();
    const endDate = new Date();

    if (temporality === "Semana") {
        startDate.setDate(startDate.getDate() - startDate.getDay() + 1);
    } else if (temporality === "Mes") {
        startDate.setDate(startDate.getDate() - startDate.getDate() + 1);
        endDate.setMonth(endDate.getMonth() + 1);
        endDate.setDate(0);
    }
    
    const sDate = startDate.toISOString()
    
    const eDate = endDate.toISOString()

    return {
        sDate,
        eDate
    }
}
const startDate = new Date();
const endDate = new Date();

console.log(startDate.toDateString())
console.log(startDate.toISOString())
console.log(startDate.toJSON())
console.log(startDate.toLocaleDateString())
console.log(startDate.toLocaleString())


console.log(endDate)

const t = "Semana"

if (t === "Semana") {
    startDate.setDate(startDate.getDate() - startDate.getDay() + 1);
} else if (t === "Mes") {
    startDate.setDate(startDate.getDate() - startDate.getDate() + 1);
} else {
    console.log("Hola")
}

const sYear = startDate.getFullYear();
const sMonth = startDate.getMonth();
const sDay = startDate.getDate();

const eYear = endDate.getFullYear();
const eMonth = endDate.getMonth();
const eDay = endDate.getDate();

console.log(`${sYear}-${sMonth}-${sDay}`)

console.log(`${eYear}-${eMonth}-${eDay}`)
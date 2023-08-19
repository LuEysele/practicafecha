
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let limDias;
const result = document.getElementById("text1");

document.querySelectorAll("input").forEach(item => {
    item.addEventListener("input", () => {
    switch(month){
        case 2:
            year%4 === 0 ? limDias = 29 : limDias = 28;
            break;
        case 4: case 6: case 9: case 11:
            limDias = 30;
            break;
        case 1: case 3: case 5: case 7: case 10: case 12:
            limDias = 31;
            break;
    }
    })
});

let laboralDay = () =>{
    event.preventDefault()
            const weekday = ["Domingo, día inhábil", "Lunes, día hábil", "Martes, día hábil", "Miércoles, día hábil", "Jueves, día hábil", "Viernes, día hábil", "Sábado, día inhábil"];
            const date = new Date(`${year.value} ${month.value} ${day.value}`);
            date.setFullYear(year.value);
            result.innerHTML = weekday[date.getDay()];
}



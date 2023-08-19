
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let limDias;
//const result = document.getElementById("text1");

document.querySelectorAll("input").forEach(item => {
    item.addEventListener("input", event => {
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
            const weekday = ["Domingo, fin de semana", "Lunes, día laborable", "Martes, día laborable", "Miércoles, día laborable", "Jueves, día laborable", "Viernes, día laborable", "Sábado, fin de semana"];
            const date = new Date(`${year.value} ${month.value} ${day.value}`);
            date.setFullYear(year.value);
            document.querySelector("#text1").innerHTML = weekday[date.getDay()];
}




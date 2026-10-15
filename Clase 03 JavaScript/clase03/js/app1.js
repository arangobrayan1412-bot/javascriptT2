const entradaCelsius = document.getElementById("celsius");
const botonConvertir = document.getElementById("convertir");
const salidaResultado = document.getElementById("resultado");

botonConvertir.addEventListener("click",function (){
    console.log("Diste click");
    let celsiusTexto = entradaCelsius.value;
    let celsius = Number(celsiusTexto);

let fahrenheit = celsius * (9/5)+32;
let celsiusConvertir = (fahrenheit - 32);

salidaResultado.textContent =celsius + "°C equivalen a "+ fahrenheit + "°F";
salidaResultado.textContent =fahrenheit + "°F equivalen a "+ celsiusConvertir + "°C";

    console.log("Grados Celsius:", celsiusTexto);
    console.log("Grados Fahrenheit:", fahrenheit);
}
);
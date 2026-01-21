
//#region Calculate and Display Windchill
const temperature = 26; // C
document.getElementById("temperature").textContent = `${temperature} °C`;

const windSpeed = 15 // km/h
document.getElementById("windspeed").textContent = `${windSpeed} km/h`;


function calculateWindChill(temp, wind) {
  let windchill =  13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));

  return windchill.toFixed(1);
}


let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
  windChill = calculateWindChill(temperature, windSpeed) + " °C";
}

document.getElementById("windchill").textContent = windChill;
//#endregion






//#region Current Year and Last Modified
const year = document.getElementById("currentyear");
const today = new Date();
year.innerHTML = today.getFullYear();



document.getElementById("lastModified").innerHTML += document.lastModified;
//#endregion



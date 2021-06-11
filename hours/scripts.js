const birthDayDate = "10 Feb 2022";
const segundos = document.getElementById("secs");
const minutos = document.getElementById("mins");
const horas = document.getElementById("hours");
const dias = document.getElementById("days");

function teste() {
  let birthday = new Date(birthDayDate);
  let todayDate = new Date();

  const segundosTotais = (birthday - todayDate) / 1000;

  let seconds = Math.floor(segundosTotais % 60);
  let mins = Math.floor((segundosTotais / 60) % 60);
  let hours = Math.floor((segundosTotais / 3600) % 24);
  let days = Math.floor(segundosTotais / 3600 / 24);

  segundos.innerHTML = seconds.toFixed(0);
  minutos.innerHTML = mins.toFixed(0);
  horas.innerHTML = hours.toFixed(0);
  dias.innerHTML = days.toFixed(0);
}

teste();

setInterval(teste, 1000);

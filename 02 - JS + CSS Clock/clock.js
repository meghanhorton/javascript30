const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');


function setDate(){
  const now = new Date();

  // Hours
  const hours = now.getHours();
  var hours12 = "";
  if (hours >= 12){ hours12 = hours - 12; } else if (hours == 0){ hours12 = 12;} else{ hours12 = hours;}
  const hourDegrees = ((hours12/12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  // Minutes
  const minutes = now.getMinutes();
  const minuteDegrees = ((minutes/60) * 360) + 90;
  minHand.style.transform = `rotate(${minuteDegrees}deg)`;

  // Seconds
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


  console.log(hours12,minutes,seconds);
}

setInterval(setDate, 1000);
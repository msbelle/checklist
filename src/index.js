import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



 

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


/*clock*/
const secondsHand = document.querySelector(".handSec");
const minutesHand = document.querySelector(".handMin");
const hoursHand = document.querySelector(".handHour");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
  if (secondsDegree === 450) {
    secondsHand.style.transform = `rotate(90deg)`;
  }

  const minutes = now.getMinutes();
  const minutesaDegree = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesaDegree}deg)`;

  const hours = now.getHours();
  const hoursDegree = (hours / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);














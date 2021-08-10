'use strict';
//стили и элементы страницы
const body = document.querySelector('body');
body.style.cssText = `
background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
color: #f2f3f4;
display: flex;
justify-content: center;
`;

const main = document.createElement('div');
main.style.cssText = `
position: absolute;
top:45%;
left:auto;
text-align:center;
`;

const longTime = document.createElement('h1');
const shortTime = document.createElement('h2');

body.append(main);
main.append(longTime);
main.append(shortTime);



function Clock() {
   let todayDay = new Date();
   let date = todayDay.toLocaleString('ru', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
   });
   date = date.charAt(0).toUpperCase() + date.slice(1, -2);

   const timesString = {
      h: [' час ', ' часов ', ' часа '],
      m: [' минута ', ' минут ', ' минуты '],
      s: [' секунда ', ' секунд ', ' секунды ']
   };

   let hour = todayDay.getHours();
   let minutes = todayDay.getMinutes();
   let seconds = todayDay.getSeconds();

   function textCorrect(value, arr) {
      let temp = value;
      if (value > 24) {
         temp = '' + temp;
         temp = +temp.charAt(1);
      }
      if (+temp === 1 || +temp === 21) {
         return value += arr[0];
      } else if (+temp > 4 && +temp < 21 || +temp === 0 || +temp > 24) {
         return value += arr[1];
      } else {
         return value += arr[2];
      }
   }


   let dateH1 = 'Сегодня ' + date + 'года, ' +
      textCorrect(hour, timesString.h) + textCorrect(minutes, timesString.m) + textCorrect(seconds, timesString.s);

   let dateH2 = ("0" + todayDay.getDate()).slice(-2) + "." +
      ("0" + (todayDay.getMonth() + 1)).slice(-2) + "." +
      todayDay.getFullYear() + " - " +
      ("0" + todayDay.getHours()).slice(-2) + ":" +
      ("0" + todayDay.getMinutes()).slice(-2) + ":" +
      ("0" + todayDay.getSeconds()).slice(-2);


   longTime.innerText = dateH1;
   shortTime.textContent = dateH2;

   setInterval(() => Clock(), 1000);
}

Clock();

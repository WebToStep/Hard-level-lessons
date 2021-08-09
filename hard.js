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



function Clock(){
   let todayDay = new Date();
   let date = todayDay.toLocaleString('ru', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
   });
   date = date.charAt(0).toUpperCase() + date.slice(1, -2);
   
   let hourString = [' час ', ' часов ', ' часа '];
   let hour = todayDay.getHours();
   
   if (+hour === 1 || +hour === 21){
      hour += hourString[0];
   }else if(+hour > 4 && +hour <21 || +hour === 0){
      hour += hourString[1];
   }else {
      hour += hourString[2];
   }

   let dateH1 = 'Сегодня ' + date + 'года, ' + hour + todayDay.getMinutes() +
    ' минут ' + todayDay.getSeconds() + ' секунды';    
   
   let dateH2 = ("0" + todayDay.getDate()).slice(-2) + "." +
   ("0"+(todayDay.getMonth()+1)).slice(-2) + "." +
   todayDay.getFullYear() + " - " + 
   ("0" + todayDay.getHours()).slice(-2) + ":" + 
   ("0" + todayDay.getMinutes()).slice(-2) +  ":" + 
   ("0" + todayDay.getSeconds()).slice(-2);
   

   longTime.innerText = dateH1;
   shortTime.textContent = dateH2;

   setInterval(()=>Clock(), 1000);
}

Clock();

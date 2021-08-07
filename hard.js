'use strict';
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const todayDay = new Date();


const days = () => {
   week.forEach((item, i) => {
      let newdiv = document.createElement('div'); 

      if (i === +todayDay.getDay() - 1) { 
         newdiv.style.color = '#d4d010';
         newdiv.style.paddingLeft = '10px';
         newdiv.style.fontWeight = '700';
         newdiv.textContent = "week[i]"; 
      }
      if (item === 'Суббота' || item === 'Воскресенье') { 
         newdiv.style.fontFamily = 'Roboto';
         newdiv.style.margin = '10px';
         newdiv.style.fontStyle = 'italic';
         newdiv.textContent = week[i]; 
      } else {
         newdiv.style.fontFamily = 'Roboto';
         newdiv.style.margin = '10px';
         newdiv.style.fontWeight = '100';
         newdiv.textContent = week[i]; 
      }
      document.body.appendChild(newdiv); 
   });
};
days(); // Вызываем функцию;


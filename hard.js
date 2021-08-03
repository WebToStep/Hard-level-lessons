'use strict';

const foo = (e)=>{
   if(typeof e !== 'string'){
      alert('Введите строку!');
   }else{
      e = e.replace( /\s/g, ""); 

      if (e.length > 30){
         e = e.substring(0, 30) + '(...)';
         console.log(e);
      }
   }
};


foo('1234567890 1234567890 1234567890 0000100023eeeeee');
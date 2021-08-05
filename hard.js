'use strict';
// #1
const randomNumbers = () => {
   let newArr = [];
   let logArr = [];
   for(let i = 0; i < 7; i++){
      function getArr() {
         // чтоб было больше совпадений сократил диапазон
         newArr.push(Math.round(Math.random() * (6 - 2) + 2) + ''  + Math.floor(Math.random() * (10000 - 100)+100));
      }
      getArr();
   }  

   let a;
   let b;
   for(let prop of newArr){
      if (prop[0].includes('2')){
         logArr.push(prop);
         a = true;
      }else if (prop[0].includes('4')){
         logArr.push(prop);
         b = true;
      }
   } 
   if(a && b){
      for(let i = 0; i < logArr.length; i++){
          console.log('Внимание найденно совпадение: ', logArr[i]);
         }
      return newArr;
   }else{
      logArr = [];
      return randomNumbers();
   }
};

let arr = randomNumbers();

console.log('массив arr: ', arr);




// #2
console.warn('задание #2');
const simpleLayer = (num) => {
   for (let i = 2; i < num; i++){
      if(num % i === 0){
         return false;
      }
   }
   return num > 1;
   
};


let push = (maxNum) => {   
   for(let i = 0; i < maxNum; i++){
      if(simpleLayer(i)){
         console.log(`Простое число ${i}, делители этого числа 1 и ${i}`);
      }
   }
};
push(100);

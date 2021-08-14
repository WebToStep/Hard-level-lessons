'use strict';

let title = document.createElement('h1');
let btn = document.createElement('button');
let body = document.body;

title.style.cssText = `
display: inline-block;
text-shadow:
  1px 1px 1px white,
  1px -1px 1px white,
  -1px 1px 1px white,
  -1px -1px 1px white;
color: steelblue;
transition: all 1s;
background-color: #666666;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: rgba(255,255,255,0.5) 0px 3px 3px;
    font-size:64px;
`;
body.style.cssText = `
margin-top:20%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-content: center;
align-items: center;
justify-content: center;
transition: all 0.3s ease-in;
`;
btn.style.cssText = `
background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 40px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 8px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`;

body.append(title);
body.append(btn);

getRandomColor();
btn.innerText = 'СМЕНИТЬ ЦВЕТ';

function getRandomColor() {
   const letters = '0123456789ABCDEF';
   let color = '#';
   for (let i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
   }
   console.log(color);
   title.innerText = color;
   body.style.background = color;
   return color;
 }
 
 btn.addEventListener('click', getRandomColor);
 
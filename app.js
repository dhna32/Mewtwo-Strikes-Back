/*jshint esversion: 6 */

//jscs:disable
let doorImage1 = document.querySelector('#door1');
const mewTwo = 'mewtwo.svg';
let doorImage2 = document.querySelector('#door2');
const pikachu = 'pikachu.png';
let doorImage3 = document.querySelector('#door3');
const mew= 'mew.svg';

doorImage1.onclick = () => {
  doorImage1.src = mewTwo;
};

doorImage2.onclick = () => {
  doorImage2.src = pikachu;
};

doorImage3.onclick = () => {
  doorImage3.src = mew;
};

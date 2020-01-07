/*jshint esversion: 6 */

//jscs:disable
let doorImage1 = document.querySelector('#door1');
const mewTwo = 'mewtwo.svg'; //botdoorpath
let doorImage2 = document.querySelector('#door2');
const pikachu = 'pikachu.png';
let doorImage3 = document.querySelector('#door3');
const mew= 'mew.svg';
const numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

doorImage1.onclick = () => {
  doorImage1.src = mewTwo;
};

doorImage2.onclick = () => {
  doorImage2.src = pikachu;
};

doorImage3.onclick = () => {
  doorImage3.src = mew;
};

const randomMewtwoDoor = () => {
  let choreDoor = Math.floor(Math.random()* numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = mewTwo;
  }else if (choreDoor === 1) {
    openDoor2 = mewTwo;
  } else if (choreDoor === 2){
    openDoor3 = mewTwo;
  } else {
    alert('SOMETHING HAS GONE WRONG!');
  }
};

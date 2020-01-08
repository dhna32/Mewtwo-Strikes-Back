/*jshint esversion: 6 */

//jscs:disable
let doorImage1 = document.querySelector('#door1');
const mewTwo = 'https://dhna32.github.io/Mewtwo-Strikes-Back/mewtwo.svg'; //botdoorpath
let doorImage2 = document.querySelector('#door2');
const pikachu = 'pikachu.png';
let doorImage3 = document.querySelector('#door3');
const mew = 'mew.svg';
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
const startButton = document.querySelector('#start');
let currentlyPlaying = true;

doorImage1.onclick = () => {
  if(!isClicked(doorImage1) && currentlyPlaying === true){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
  if(!isClicked(doorImage2) && currentlyPlaying === true){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if(!isClicked(doorImage3) && currentlyPlaying === true){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

startButton.onclick = () =>{
  if(!currentlyPlaying){
    startRound();
  }

};

const startRound = ()  => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomMewtwoDoor();
};



const gameOver = (status) =>{
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play Again?';
  } else{
    startButton.innerHTML = 'Game Over! Play Again?';
  }
  currentlyPlaying = false;
};

const randomMewtwoDoor = () => {
  let choreDoor = Math.floor(Math.random()* numClosedDoors);
  //console.log(choreDoor);
  if (choreDoor === 0) {
    openDoor1 = mewTwo;
    openDoor2 = pikachu;
    openDoor3 = mew;
  }else if (choreDoor === 1) {
    openDoor1 = mew;
    openDoor2 = mewTwo;
    openDoor3 = pikachu;
  } else if (choreDoor === 2){
    openDoor3 = mewTwo;
    openDoor1 = pikachu;
    openDoor2 = mew;
  } else {
    alert('SOMETHING HAS GONE WRONG!');
  }
};


  const playDoor = (door) => {
    numClosedDoors--;
    if(numClosedDoors === 0){
      gameOver('win');
    } else if(isMewTwo(door)){
      gameOver();
    }
  };

  const isClicked = (door) =>{
    if (door.src === closedDoorPath) {
      return false;
    } else {
      return true;
    }
  };

  const isMewTwo = (door) =>{
    console.log(door);
    console.log(door.src);
    console.log(mewTwo);
    if(door.src === mewTwo){
      return true;
    }else{
      return false;
    }
  };

  startRound();

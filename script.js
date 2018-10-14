let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let numClosedDoor = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

const startButton = document.getElementById('start');

const playDoor = (door) => {
    numClosedDoor--;
    if ( numClosedDoor === 0 ) {
      gameOver('win');
    } else if (isBot(door)) {
      gameOver();
    }
  };
  
  const isClicked = (door) => {
    if( door.src === closedDoorPath ) {
      return false;
    } else {
      return true;
    }
  }
  
  const isBot = (door) => {
    if( door.src === botDoorPath) {
      return true;
    } else {
      return false;
    }
  };
  
  const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoor);
    if( choreDoor === 0) {
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
      openDoor2 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor3 = spaceDoorPath;
    } else if (choreDoor === 2){
      openDoor3 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor2 = spaceDoorPath;
    }
  };
  
  door1.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage1)) {
      doorImage1.src = openDoor1;
      playDoor(door1);
    }
  };
  
  door2.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage2)) {
      doorImage2.src = openDoor2;
      playDoor(door2);
    }
  };
  
  door3.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage3)) {
      doorImage3.src = openDoor3;
       playDoor(door3);
    };
  };
  
  startButton.onclick = () => {
    if ( !currentlyPlaying ) {
           startRound();
    }
  }
  
  const startRound = () => {
    numClosedDoor = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = "Good luck!";
    currentlyPlaying = true;
    randomChoreDoorGenerator();
  }
  
  const gameOver = (status) => {
    if(status === 'win') {
      startButton.innerHTML = "You Win! Play again?"
    } else {
      startButton.innerHTML = "Game Over! Play again?"
    }
    currentlyPlaying = false;
  }
  
  startRound();




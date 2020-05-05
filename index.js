const block = document.querySelector('.block');
const oneMinute = document.querySelector('.one');
const twoMinute = document.querySelector('.two');
let timeLimit = 120000; 
let currentTime = 0;

let increaseBlock = setInterval(() => {
  
  oneMinute.style.display = 'block';
  twoMinute.style.display = 'none';
  currentTime += 200;

  if(currentTime < 60000) {
    let height = block.offsetHeight;
    height += 2;
    block.style.height = `${height}px`;
  } else {
    let newHeight = block.offsetHeight;
    oneMinute.style.display = 'none';
    twoMinute.style.display = 'block';
    newHeight -= 2;
    block.style.height = `${newHeight}px`;
  }
  if(currentTime === timeLimit) clearInterval(increaseBlock);
}, 200);

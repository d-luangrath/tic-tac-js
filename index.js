console.log("hello index.js");

let player = "X"

function play(evt) {
    const targetSq = evt.target;
    targetSq.innerText = player

    //switch turns

    // if (player ==="X") {
    //     player = "O";
    // } else {
    //     player = "X";
    // }
    
    // ternary operator
    player = player === "X" ? "O" : "X";

    const playerSpan = document.querySelector('#current-player');
    playerSpan.innerText = player;
  }

  const squares = document.querySelectorAll('.square');
  
  for (const square of squares) {
    square.addEventListener('click', play)
  }
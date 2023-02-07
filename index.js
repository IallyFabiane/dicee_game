let randomNumber  = (Math.random() * 6 ).toFixed(0);
console.log(randomNumber);


function randomImage() {
    let img1 = document.querySelector('img1');

    if (randomNumber === 1) {
        img1.setAttribute("src", "images/dice1.png");
    } else if (randomNumber === 2) {
        img1.setAttribute("src", "images/dice2.png");
    } else if (randomNumber === 3) {
        img1.setAttribute("src", "images/dice1.png");
    } else if (randomNumber === 4) {
        img1.setAttribute("src",  "images/dice4.png");
    } else if (randomNumber === 5) {
        img1.setAttribute("src", "images/dice5.png");
    } else if (randomNumber === 6) {
        img1.setAttribute("src", "images/dice6.png");
    }
    
}


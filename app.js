// Exercise 1
function countdown(num) {
    //why do we need to intialize it to variable?
    let number = setInterval(() => {
        num--;

        if (num <= 0) {
            //clearInterval(number);
            console.log("Done");
        }
        else {
            console.log(num);
        }
    }, 1000);
}
countdown(4);


// Both code executes simultaneously to run Exercise 2 uncomment out this line of code.


// function randomGame() {
//     let randonum;
//     let times = 0;
//     let timer = setInterval(() => {
//         console.log("hello");
//         randonum = Math.random();
//         times++;

//         if (randonum > .75) {
//             clearInterval(timer);
//             console.log("It took " +times + " to run.");
//         }
//     }, 1000);

// }
// console.log(randomGame());

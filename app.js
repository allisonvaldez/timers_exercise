function countdown(num) {
    //why do we need to intialize it to variable?
    let number = setInterval(function () {
        num--;

        if (num <= 0) {
            clearInterval(number);
            console.log("Done");
        }
        else {
            console.log(num);
        }
    }, 1000);
}
console.log(countdown(4));
function countdown(inputNum){
    if(typeof inputNum == "number" && inputNum > 0){
        let count = 1;
        for(let i = inputNum-1; i > 0; i--){
            setTimeout(function(){console.log(i)}, count*1000);
            count++;
        }
        setTimeout(function(){console.log("DONE!")}, count*1000);
    }
    else{
        console.log("Input must be a number greater than 0!");
    }
}

function randomGame(){
    let counter = 0;
    let gameInterval = setInterval(function(){
        counter++;
        if(Math.random() > 0.75){
            console.log(counter);
            clearInterval(gameInterval);
        }
    }, 1000);
}
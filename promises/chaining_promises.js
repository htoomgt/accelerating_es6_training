function waitASecond(seconds){
    return new Promise(function(resovle, reject){
        setTimeout(function(){
            seconds++;
            resovle(seconds);
        }, 1000)
    });
}

waitASecond(0).then(waitASecond)
    .then(function(seconds){
        console.log(seconds);
    });
function waitASecond(seconds){
    return new Promise(function(resovle, reject){
       if(seconds > 2){
           reject('Rejected!');
       }else{
           setTimeout(function(){
               seconds++;
               resovle(seconds);
           }, 1000);
       }
    });
}

waitASecond(2)
    .then(waitASecond)
    .then(function(seconds){
        console.log(seconds);
    })
    .catch(function(error){
        console.log(error);
    });
random = () =>{
    let color = '#';
    const hex = '0123456789ABCDEF';

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
        
    }
    return color;
}


let intervalId;
startTheChangeColor = () => {

    changeBg = () => {
        document.body.style.backgroundColor = random();
    }

    if(!intervalId){
        intervalId = setInterval(changeBg , 1000);
    }
    
    
}

stopTheChangeColor = () => {
    clearInterval(intervalId);
    intervalId = null;
    
}



document.querySelector('#start').addEventListener(
    'click' ,
    startTheChangeColor
)

document.querySelector('#stop').addEventListener(
    'click' ,
    stopTheChangeColor
)


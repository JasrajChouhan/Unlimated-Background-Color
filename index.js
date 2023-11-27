let color;


// hexcode to rgb convert
function hashToRGB(hexColor) {
    const patternColor = /^#([A-Fa-f0-9]{6})$/;

    if (hexColor.match(patternColor)) {
        const hexWithoutHash = hexColor.replace("#", "");
        const r = parseInt(hexWithoutHash.substring(0, 2), 16);
        const g = parseInt(hexWithoutHash.substring(2, 4), 16);
        const b = parseInt(hexWithoutHash.substring(4, 6), 16);
        return `RGB(${r}, ${g}, ${b})`;
    } else {
        return 'Error: Invalid Color Format';
    }
}

//copy the value of rgb and hex code 
function copyToClipboard(type) {
    const textarea = document.getElementById('hiddenTextarea')
    const value = (type === 'hash') ? color: hashToRGB(color)

    textarea.value = value;
    textarea.select();
    document.execCommand('copy');
    
    // alert(`Copied ${type === 'hash' ? 'hash code' : 'RGB values'} to clipboard: ${value}`);
}

// create random colorcode in hex
random = () =>{
    color = '#';
    const hex = '0123456789ABCDEF';

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
        
    }

    document.getElementById('copy-hash').addEventListener(
        'click',
        function (){
            copyToClipboard('hash')

        }
        
    )
    document.getElementById('copy-rgb').addEventListener(
        'click',
        function (){
            copyToClipboard('rgb')

        }
    )

    const rgbValues = hashToRGB(color);

    document.getElementById('hashcode').innerHTML = color;
    document.getElementById('rgbcode').innerHTML = rgbValues;

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


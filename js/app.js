function getpin(){
    const pin = generatPin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getpin();
    }
}

function generatPin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generat-pin').addEventListener('click', function(){
const pin = getpin();
const displyPin = document.getElementById('disply-pin');
displyPin.value = pin;


});


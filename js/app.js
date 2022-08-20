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
document.getElementById('calculator'),addEventListener('click', function(event){
    
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typeNumber');
    const previusTypeNumber = typeNumberField.value;
    if(isNaN(number)){
        
        if(number === 'C'){
            typeNumberField.value = '';

        }
        else if(number === '<'){
            const digits = previusTypeNumber.split('');
            digits.pop();
            const reminingDigits = digits.join('');
            typeNumberField.value = reminingDigits;

        }
    }
    else{
        
        
        const newTypeNumber = previusTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }

});
document.getElementById('verify-pin').addEventListener('click', function(){
    const displyPinNumber = document.getElementById('disply-pin');
    const curentNumber = displyPinNumber.value;

    const typeNumber = document.getElementById('typeNumber');
    const curentTypeNumber = typeNumber.value;

    const pinSucess = document.getElementById('pin-sucess');
    const painFailMsg = document.getElementById('pin-failur');

    if(curentNumber == curentTypeNumber){
       pinSucess.style.display = 'block';
       painFailMsg.style.display = 'none';
    }
    else{
       
        painFailMsg.style.display = 'block';
        pinSucess.style.display = 'none';
    }
})

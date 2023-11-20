let kilometres = prompt('Quanti kilometri vuoi percorrere?');
let age = prompt('Quanti hanni hai?');
let pricePerKm = 0.21;
let price = pricePerKm * kilometres;
let priceMultiplier = 1;

if(age <= 18 || age >= 65){
    if(age <= 18){
        priceMultiplier = 0.80;
    }
    else{
        priceMultiplier = 0.60;
    }
}

price *= priceMultiplier;
price = price.toFixed(2);
let priceMsg = `Your price is ${price}$.`
console.log(priceMsg);
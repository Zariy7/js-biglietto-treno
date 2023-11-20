function priceCalc(){
    let kilometres = document.getElementById('kilometres').value;
    let age = document.getElementById('age').value;
    let priceKmRatio = 0.21;
    let price = priceKmRatio * kilometres;
    let priceDiscountMultiplier = 1;

    //CALCULATE DISCOUNT
    if(age <= 18 || age >= 65){
        if(age <= 18){
            priceDiscountMultiplier = 0.80;
        }
        else{
            priceDiscountMultiplier = 0.60;
        }
    }

    price *= priceDiscountMultiplier;
    price = price.toFixed(2);
    let priceMsg = `${price}$`
    document.getElementById('price').innerHTML = priceMsg;
}
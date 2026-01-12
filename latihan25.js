function calculateDiscount(array, promo_code){
    if (promo_code){
        let discount = 0;
        for ( let i = 0; i<array.length; i++){
            if ((array[i][2] / array[i][1]) >= 100000 ){
                discount += (array[i][2] * 0.1);
            }
        }

        if  (discount >10000000){
            discount = 1000000;
        }

        return discount
    }
}

console.log(calculateDiscount([
    ["logitech mouse", 2, 800000],
    ["blutooth speaker", 1, 300000],
    ["samsung galaxy", 1, 9000000],
], "Test"))
function sumEven(array){
    let result = 0;
    for(let i = 0; i< array.length; i++){
        if(array[i] % 2 === 0){
            result += array[i];
        } else { continue;}
    }
    return result;
}

console.log(sumEven([1, 2, 3, 4, 5, 6, 8, 10])
)
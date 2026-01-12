function firstUnique(sentence){
    let temp = "";
    let bool = false;
    for(let i = 0; i< sentence.length; i++){
        let counter = 0;
        for(let j =0; j< sentence.length; j++){
            if (sentence[i] === sentence[j]){
                counter++;
            }
        }
        if (counter == 1){
            temp+= sentence[i];
            break;
        }
    }
    return temp;
}

console.log(firstUnique("ssammpoerna"))
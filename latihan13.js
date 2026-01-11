function countChar(sentence){
    let obj = {};

    for (let i = 0; i<sentence.length; i++){
        let letter = sentence[i];

        if(!obj[letter]){
            obj[letter] = 1;
        } else { 
            obj[letter]++;
        }
    }
    return obj;
}

console.log(countChar("sampoernaabdul")
)
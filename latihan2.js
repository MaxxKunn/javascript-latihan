function vowel(sentence){
    sentence = sentence.toLowerCase();
    const check = ["a","i","u","e","o"];
    let counter = 0;
    for (let i = 0; i< check.length;i++){
        for (let j = 0; j< sentence.length; j++){
            if( check[i] == sentence[j]){
                counter++;
            }
        }
    }
    return counter;
}

console.log(vowel("abdulrahmanhakim"))
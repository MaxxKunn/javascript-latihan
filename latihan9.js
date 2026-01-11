function countWords(sentence){
    let result = [];
    let counter = 0;
    let word  = "";
    for (let i = 0; i< sentence.length; i++){
        word += sentence[i];
        if( sentence[i+1] === " " || sentence[i+1] === undefined){
            i++;
            result.push(word);
            counter++;
            word = "";
        }

    }
    console.log(result)
    return counter;
}

console.log(countWords("PT HM Sampoerna Indonesia")
)
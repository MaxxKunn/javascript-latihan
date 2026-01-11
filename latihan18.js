function compress(sentence){
    sentence = sentence.toLowerCase();
    let temp = "";
    let result = [];
    for(let i = 0; i< sentence.length; i++){
        temp += sentence[i];
        if( sentence[i+1] != sentence[i] || sentence[i+1] == undefined){
            result.push(temp);
            temp = "";
        }
    }

    let resultString = ""

    for(let i = 0; i<result.length; i++){
        resultString += result[i][0] + result[i].length;
    }
    console.log(result)
    return resultString;
}

console.log(compress("aabcccccaaa")
)
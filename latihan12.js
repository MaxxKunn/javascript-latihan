function findLongest(sentence){
    let word = "";
    let result = [];

    for(let i = 0; i<sentence.length; i++){
        word += sentence[i];
        if(sentence[i+1] === " " || sentence[i+1] === undefined){
            i++;
            result.push(word);
            word = "";
        }
    }
    let longest= "";
    for (let i = 0; i<result.length; i++){
        longest = result[0];
        if(longest.length < result[i].length){
            longest = result[i];
        }
    }

    return longest;
}

console.log(findLongest("internship at hmdawfniauw sampoernabdulrahman"
))
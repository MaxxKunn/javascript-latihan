function capitalizeSentence(sentence){
    sentence = sentence.toLowerCase();

    let result = [];
    let temp = "";

    for(let i = 0; i < sentence.length; i++){
        temp += sentence[i];

        if(sentence[i+1] === undefined || sentence[i+1] === " "){
            i++;
            result.push(temp);
            temp = "";
        }
    }

    let resString = "";

    for (let i = 0; i < result.length; i++){
        let tempo = result[i];
        tempo = tempo[0].toUpperCase() + tempo.slice(1);
        resString += tempo + " ";
    }

    return resString;
}

console.log(capitalizeSentence("pt hm sampoerna"));
// Pt Hm Sampoerna

function reverse(sentence){
    sentence = sentence.toLowerCase();
    let result = "";
    for ( let i  = sentence.length-1; i>=0; i--){
        result  += sentence[i];
    }

    return result;
}

console.log(reverse("sampoernA"))
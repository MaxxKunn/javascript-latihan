function removeDuplicate(array){
    let result = [];
    
    for (let i = 0; i<array.length; i++){
        let bool = false;
        for (let j = 0; j<result.length; j++){
            if(array[i] === result[j]){
                bool = true;
                break;
            }
        }
        if(bool == false){
            result.push(array[i]);
        }
    }
    return result;
}

console.log(removeDuplicate([7,6,2,2,3,4,4,5,6,6]));
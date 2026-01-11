function removeDuplicate(array){
    let result = [];
    for ( let i = 0; i< array.length; i++){
        if (!result.includes(array[i])){
            result.push(array[i])
        } else { continue;}
    }
    return result;
}

console.log(removeDuplicate([1,2,2,3,4,4]))

function removeDupe(arr){
    
    let result = [];
    
    for ( let i =0; i< arr.length; i++){
        let bool = true;
        for(let j = 0; j<result.length; j++){
            if ( arr[i] === result[j]){
                bool = false;
                break;
            }
        }
        if(bool == true){
            result.push(arr[i]);
        }
    }
    return result;
}
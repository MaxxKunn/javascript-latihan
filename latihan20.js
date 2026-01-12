function countFreq(array){
    let result = {};

    for ( let i = 0; i< array.length; i++){
        let num = array[i];

        if(!result[num]){
            result[num] = 1;
        } else { 
            result[num]++;
        }
    }

    return result;

}

console.log(countFreq([1,1,2,2,3,3,3])
)
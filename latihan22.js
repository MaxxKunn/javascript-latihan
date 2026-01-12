function findMissing(array){
    let result = [];

    for (let i = 0; i< array.length-1; i++){
        if(array[i+1] !== (array[i]+1)){
            result.push(array[i]+1);
        }
    }

    return result;
}

console.log(findMissing([1,2,3,5,6,8])
)
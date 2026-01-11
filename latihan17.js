function findSmallest(array){
    let smallest = array[0];
    let secondSmallest = Infinity;

    for(let i = 1;i<array.length; i++){
        if(smallest>array[i]){
            secondSmallest = smallest;
            smallest = array[i];
        } else if (secondSmallest>array[i] && smallest<array[i]){
            secondSmallest = array[i];
        }
    }
    return secondSmallest;
}

console.log(findSmallest([1, 1, 3, 2]))
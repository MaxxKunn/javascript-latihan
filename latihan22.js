function findMissing(array){
    let result = [];

    for (let i = 0; i < array.length - 1; i++) {
        let current = array[i];
        let next = array[i + 1];

        for (let num = current + 1; num < next; num++) {
            result.push(num);
        }
    }
    return result;
}

console.log(findMissing([1,2,3,6,8])
)
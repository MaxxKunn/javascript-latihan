function groupByLength(array){
    let result = {};

    for (let i = 0; i< array.length; i++){
        let length = array[i].length;

        if (!result[length]){
            result[length] = []
        }

        result[length].push(array[i]);
    }
    return result;
}

console.log(groupByLength(["hi", "hello", "hey", "world", "ambatukam", "ho"])
)
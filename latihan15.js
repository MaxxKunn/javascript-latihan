function swap(array){
    let temp = 0;
    temp = array[0];
    array[0] = array[array.length-1];
    array[array.length-1] = temp;

    return array;
}

console.log(swap([1, 2, 3, 4,6,7]))
function largandseclarg(arr){
    let largest = arr[0];
    let secLargest = -Infinity;
    for (let i = 1; i< arr.length; i++){
        if ( arr[i] > largest){
            secLargest = largest;
            largest = arr[i];
        } else if (secLargest<arr[i] && largest>arr[i]){
            secLargest = arr[i]
        }

    }

    return largest, secLargest;
}

console.log(largandseclarg([50, 20, 30, 50, 40, 45])
)
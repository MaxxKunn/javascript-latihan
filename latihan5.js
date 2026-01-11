function groupData(arr){
    let group = {};

    for (let i = 0; i< arr.length; i++){
        let dept = arr[i].dept;
        let name = arr[i].name;

        if(!group[dept]){
            group[dept] = [];
        } 

        group[dept].push(name);
    }

    return group;
}

console.log(groupData([
  { name: "Andi", dept: "IT" },
  { name: "Budi", dept: "HR" },
  { name: "Citra", dept: "IT" }
]));
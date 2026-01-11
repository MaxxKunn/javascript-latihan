function groupByDept(obj){
    let result = {};

    for (let i = 0; i<obj.length; i++){
        let dept = obj[i].dept;
        let name = obj[i].name;

        if(!result[dept]){
            result[dept] = [];
        }

        result[dept].push(name);
    }

    return result;
}

console.log(groupByDept([
  { name: "Andi", dept: "IT" },
  { name: "Budi", dept: "HR" },
  { name: "Citra", dept: "IT" },
  { name: "Desti", dept: "Accounting" },
  { name: "Elang", dept: "HR" }
]))
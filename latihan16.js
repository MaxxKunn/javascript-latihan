function groupData(obj){
    let grouped = {};

    for(let i = 0; i< obj.length; i++){
        let category = obj[i].category;
        let name = obj[i].name;

        if (!grouped[category]){
            grouped[category] = [];
        }

        grouped[category].push(name);
    }

    return grouped;
}

console.log(groupData([
  { name: "Rokok A", category: "Cigarette" },
  { name: "Kopi B", category: "Beverage" },
  { name: "Rokok C", category: "Cigarette" }
]));
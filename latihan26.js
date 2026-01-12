function groupBlogPosts(object){
    let result = {};

    for (let i = 0; i<object.length; i++){
        let tag = object[i].tag;
        let title = object[i].title;

        if(!result[tag]){
            result[tag] = [];
        }

        result[tag].push(title);
    }
    return result;
}

console.log(groupBlogPosts([
  {title: "Intro to React", tag: "React"},
  {title: "Learning React", tag: "React"},
  {title: "Intro to Vue", tag: "Vue"},
  {title: "Learning Vue", tag: "Vue"},
  {title: "Intro to Vuiole", tag: "viole"}
]
))
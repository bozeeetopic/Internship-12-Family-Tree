function listMenu () {
    let person = new Person;
    for(let property in person){
        alert(person.property);
    }
}



function treeMenu () {
    let persons = returnData();
    for(let person in persons){
        console.log(person.toString()+"\n")
    }
}
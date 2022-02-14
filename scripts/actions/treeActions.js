function treeActionsList()
{
    let actions = [];
    actions.push({name: "Dodaj člana obitelji", function: treeAction.newMember});
    actions.push({name: "Osoba umrla", function: treeAction.dead});
    actions.push({name: "Trivia", function: treeAction.trivia});
    actions.push({name: "Idi na roditelja", function: treeAction.parent});
    actions.push({name: "Idi na dijete", function: treeAction.children});
    actions.push({name: "Izlaz", funtion: treeAction.exit});
    return actions;
}

function addMemberActions(person, persons){
    return newPerson;
}

function calculateDeathYear(person, persons){
    let children = [...persons.filter(person => person.parent === person.id)];
    let minYear;

    if(children == null)
    {
        minYear = person.birthYear;
    }
    else 
    {
        minYear = Math.min(children.map(child => child.birthYear)) + 1;
    }

    do
    {
        choice = parseInt(prompt(`Unesi godinu smrti ${person.name}, minimum je: ${minYear}`));
    }
    while(choice < minYear || choice > new Date.getFullYear())

    if(isNaN(choice))
    {
        return null;
    }
    else
    {
        return choice;
    } 
}

function triviaMenu(person, persons){

}

function chooseAmongChildren(person, persons){
    let children = [...persons.filter(person => person.parent === person.id)];
    let choice;

    let actionString = "Unesi broj uz dite:\n\n";
    for (let i = 0; i < children.length; i++) {
        actionString += `${i}. - ${children[i].name}\n`
    }
    actionString += `${children.length}. - Exit\n`

    do
    {
        choice = parseInt(prompt(actionString));
    }
    while(choice.isNaN()|| choice < 1 || choice > children.length+1)

    if(choice === children.length){
        return person;
    }
    return children[choice];
}
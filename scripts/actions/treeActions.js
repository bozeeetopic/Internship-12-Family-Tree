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
    if(person.significantOther == null)
    {
        let newName = prompt("Unesi ime supružnika:");
        if(!newName)
        {
            return;
        }
        let newSurname = prompt("Unesi prezime supružnika:");
        if(!newSurname)
        {
            return;
        }
        let newBirthYear = ParseInt(prompt("Unesi godinu rođenja supružnika:"));
        if(!newBirthYear)
        {
            return;
        }
        let newGender;
        if(confirm("Odaberi ok za muški spol, ili cancel za žensko"))
        {
            newGender = gender.male;
        }
        else
        {
            newGender = gender.female;
        }
        let newPerson = new Person(persons.length,newName,newSurname,null,newBirthYear,null,newGender,person.id);
        person.significantOther = newPerson.id;
        persons.push(newPerson);
    }
    else
    {
        let minYear = Math.min(person.birthYear + 6 , 
                          persons.find(person => person.significantOther === person.id)?.birthYear + 6);
        let maxYear = Math.min(new Date.getFullYear(), 
                           person.deathYear + 1, 
                           persons.find(person => person.significantOther === person.id)?.deathYear + 1);
        let newName = prompt("Unesi ime djeteta:");
        if(!newName)
        {
            return;
        }
        let newBirthYear;
        do
        {
            newBirthYear = parseInt(prompt(`Unesi godinu rođenja djeteta, između ${minYear} i ${maxYear}: `));
        }
        while(newBirthYear > minYear || newBirthYear < maxYear);
        if(isNaN(newBirthYear))
        {
            return;
        }
        let newGender;
        if(confirm("Odaberi ok za muški spol, ili cancel za žensko"))
        {
            newGender = gender.male;
        }
        else
        {
            newGender = gender.female;
        }
        new Person(persons.length,newName,person.surname,person.id,newBirthYear,null,newGender,null);
        persons.push(newPerson);
    }
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
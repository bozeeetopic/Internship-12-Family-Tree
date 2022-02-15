function treeActionsList()
{
    return [{name: "Dodaj člana obitelji", function: treeAction.newMember},
            {name: "Osoba umrla", function: treeAction.dead},
            {name: "Trivia", function: treeAction.trivia},
            {name: "Idi na roditelja", function: treeAction.parent},
            {name: "Idi na dijete", function: treeAction.children},
            {name: "Izlaz", funtion: treeAction.exit}];
}

function addMemberActions(person, persons){
    if(person.significantOther == null)
    {
        let deathCheck = (person.deathYear == null ? new Date().getFullYear() - 6 : person.deathYear - 6);
        let maxYear = Math.min(new Date().getFullYear() - 6, deathCheck);

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

        let newBirthYear = returnIntMax(`Unesi godinu rođenja supružnika, do maks ${maxYear}: `, maxYear);
        if(isNaN(newBirthYear))
        {
            return;
        }

        let newGender = (confirm("Odaberi ok za muški spol, ili cancel za žensko") ? gender.male : gender.female);
        
        let newPerson = new Person(persons.length,newName,newSurname,null,newBirthYear,null,newGender,person.id);
        person.significantOther = newPerson.id;
        persons.push(newPerson);
    }
    else
    {
        let personDeathCheck = (person.deathYear == null ? new Date().getFullYear() - 6 : person.deathYear - 6);
        let wife = persons.find(p => p.significantOther === person.id);
        let wifeDeathCheck = (wife.deathYear == null ? new Date().getFullYear() - 6 : wife.deathYear - 6);

        let minYear = Math.max(person.birthYear + 6 , wife.birthYear + 6);
        let maxYear = Math.min(new Date().getFullYear(), personDeathCheck, wifeDeathCheck);

        let newName = prompt("Unesi ime djeteta:");
        if(!newName)
        {
            return;
        }

        let newBirthYear = returnIntMinMax(`Unesi godinu rođenja djeteta, između ${minYear} i ${maxYear}: `, minYear, maxYear);
        if(isNaN(newBirthYear))
        {
            return;
        }

        let newGender = (confirm("Odaberi ok za muški spol, ili cancel za žensko") ? gender.male : gender.female);

        let newPerson = new Person(persons.length,newName,person.surname,person.id,newBirthYear,null,newGender,null);
        persons.push(newPerson);
    }
}

function calculateDeathYear(person, persons){
    let children = persons.filter(p => p.parent === person.id);
    let minYear;

    minYear = ((children == null || children.length == 0) ? 
                person.birthYear : 
                Math.min(children.map(c => c.birthYear)) + 1)

    let deathYear = returnIntMinMax(`Unesi godinu smrti ${person.name}, minimum je: ${minYear}`, minYear, new Date().getFullYear());

    return (isNaN(deathYear) ? null : deathYear);
}

function triviaMenu(person, persons){

    let actionsList = [...triviaActionsList()];

    let actionString = "Unesi broj uz akciju za njeno izvođenje:\n\n";
    for (let i = 0; i < actionsList.length; i++) 
    {
        actionString += `${i+1}. - ${actionsList[i].name}\n`
    }

    choice = returnIntMinMax(actionString, 1, actionsList.length);

    switch(actionsList[choice - 1].function)
    {
        case triviaAction.rootDistance:
            distanceFromRoot(person, persons);
            break;
        case triviaAction.siblingsCount:
            siblingsCount(person, persons);
            break;
        case triviaAction.averageAge:
            averageAge(person, persons);
            break;
        case triviaAction.nameCounter:
            nameCounter(persons);
            break;
        case triviaAction.printTree:
            let personZeroToArray = [];
            personZeroToArray.push(persons[0]);
            alert(printTree(personZeroToArray, persons));
            break;
    }
}

function chooseAmongChildren(person, persons){
    let children = persons.filter(p => p.parent === person.id);

    let actionString = "Unesi broj uz dite:\n\n";
    for (let i = 0; i < children.length; i++) {
        actionString += `${i+1}. - ${children[i].name}\n`
    }

    let childIndex = returnIntMinMax(actionString, 1, children.length);

    return (isNaN(childIndex) ? person : children[childIndex-1]);
}

function listActionsList()
{
    let actions = [];
    actions.push({name: "Dodaj člana obitelji", function: newMember()});
    actions.push({name: "Person died", function: died()});
    actions.push({name: "Trivia", function: triviaMenu()});
    actions.push({name: "Exit", funtion: 0});
}


function listMenu () {
    let persons = returnData();
    do
    {
        console.clear();
        console.log("Ime Prezime - Spol\tRođen - Umro\tIme ćaće\tIme muža/žene\n\n")
        for(let person of persons)
        {
            console.log(person.toString()+"\n")
        }


        let e = prompt("hnjoh");
    }
    while(e);
}

function treeMenu () {
    let persons = returnData();
    let person = persons[0];
    let actionsList = [];
    let choice;
    do
    {
        actionsList = [...treeActionsList()]
        if(!persons.some(person => person.parent === person.id))
        {
            actionsList.splice(4,1);
        }
        if(person.parent == null)
        {
            actionsList.splice(3,1);
        }
        if(person.deathDate == null)
        {
            actionsList.splice(1,1);
        }
        if((person.deathYear != null && person.significantOther == null) || 
           (person.deathYear != null && person.deathYear < person.birthYear + 6) || 
           (new Date().getFullYear() < person.birthYear + 6) || 
           (person.gender === gender.female && person.significantOther != null) ||
           (persons.find(person => person.significantOther === person.id)?.gender === gender.male))
        {
            actionsList.splice(0,1);
        }
        
        console.log(person.toString()+"\n");

        let actionString = "Unesi broj uz akciju za njeno izvođenje:\n\n";
        for (let i = 0; i < actionsList.length; i++) {
            actionString += `${i}. - ${actionsList[i].name}\n`
        }

        do
        {
            choice = parseInt(prompt(actionString));
        }
        while(isNaN(choice) || choice < 1 || choice > actionsList.length)

        switch(actionsList[choice].function){
            case treeAction.newMember:
                let newPerson = addMemberActions(person, persons);
                if(newPerson != null){
                    persons.push(newPerson);
                }
                break;
            case treeAction.dead:
                person.deathYear = calculateDeathYear(person, persons);
                break;
            case treeAction.trivia:
                triviaMenu(person, persons);
                break;
            case treeAction.parent:
                person = persons.find(person => person.id === person.parent);
                break;
            case treeAction.children:
                person = chooseAmongChildren(person, persons);
                break;
            case treeAction.exit:
                choice = 0;
                break;
        }
    }
    while(choice !== 0);
}
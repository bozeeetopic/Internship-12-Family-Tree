
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


function treeActionsList()
{
    let actions = [];
    actions.push({name: "Dodaj člana obitelji", function: treeAction.newMember});
    actions.push({name: "Person died", function: treeAction.dead});
    actions.push({name: "Trivia", function: treeAction.trivia});
    actions.push({name: "Go to parent", function: treeAction.parent});
    actions.push({name: "Go to children", function: treeAction.children});
    actions.push({name: "Exit", funtion: treeAction.exit});
    return actions;
}

function treeMenu () {
    let persons = returnData();
    let person = persons[0];
    let actionsList = [];
    do
    {
        actionsList = [...treeActionsList]
        if(person.deathDate == null)
            remove go to parent


        if(persons.some(person => person.parent === person.id))
        {
            actionsList.push({name: "Go to children", function: ChooseAmongChildren(person)});
        }
        console.log(person.toString()+"\n");
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            
        }
    }
    while(choice !== 0);
}
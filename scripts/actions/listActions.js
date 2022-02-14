function listActionsList()
{
    let actions = [];
    actions.push({name: "Dodaj člana obitelji", function: listAction.newMember});
    actions.push({name: "Person died", function: listAction.dead});
    actions.push({name: "Trivia", function: listAction.trivia});
    actions.push({name: "Exit", funtion: listAction.exit});
}
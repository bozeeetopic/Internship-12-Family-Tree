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
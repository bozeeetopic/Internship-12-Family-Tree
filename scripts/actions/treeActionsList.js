function treeActionsList() {
  return [
    { name: "Dodaj člana obitelji", function: treeAction.newMember },
    { name: "Osoba umrla", function: treeAction.dead },
    { name: "Trivia", function: treeAction.trivia },
    { name: "Idi na roditelja", function: treeAction.parent },
    { name: "Idi na dijete", function: treeAction.children },
    { name: "Izlaz", funtion: treeAction.exit },
  ];
}

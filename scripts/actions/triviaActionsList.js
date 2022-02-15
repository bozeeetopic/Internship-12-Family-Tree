function triviaActionsList() {
  return [
    { name: "Udaljenost od pretka", function: triviaAction.rootDistance },
    { name: "Broj braće i sestara", function: triviaAction.siblingsCount },
    { name: "Prosječna životna dob spola", function: triviaAction.averageAge },
    { name: "Tabica imena", function: triviaAction.nameCounter },
    { name: "Ispis stabla", function: triviaAction.printTree },
    { name: "Natrag", function: triviaAction.back },
  ];
}

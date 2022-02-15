function triviaMenu(person, persons) {
  let actionsList = [...triviaActionsList()];

  let actionString = "Unesi broj uz akciju za njeno izvođenje:\n\n";
  for (let i = 0; i < actionsList.length; i++) {
    actionString += `${i + 1}. - ${actionsList[i].name}\n`;
  }

  choice = returnIntMinMax(actionString, 1, actionsList.length);

  switch (actionsList[choice - 1].function) {
    case triviaAction.rootDistance:
      distanceFromRoot(person, persons);
      break;
    case triviaAction.siblingsCount:
      siblingsCount(person, persons);
      break;
    case triviaAction.averageAge:
      averageGenderAge(person, persons);
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

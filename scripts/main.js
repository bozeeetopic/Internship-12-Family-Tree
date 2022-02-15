let persons = returnData();
let person = persons[0];
let actionsList = [];
let choice;
do {
  actionsList = [...treeActionsList()];
  if (!persons.some((p) => p.parent === person.id)) {
    actionsList.splice(4, 1);
  }

  if (person.parent == null) {
    actionsList.splice(3, 1);
  }

  if (person.deathYear != null) {
    actionsList.splice(1, 1);
  }

  if (
    (person.deathYear != null && person.deathYear < person.birthYear + 6) ||
    new Date().getFullYear() < person.birthYear + 6 ||
    (person.gender === gender.female && person.significantOther != null) ||
    persons.find((p) => p.significantOther === person.id)?.gender ===
      gender.male
  ) {
    actionsList.splice(0, 1);
  }

  console.log(person.toString() + "\n");

  let actionString = "Unesi broj uz akciju za njeno izvođenje:\n\n";
  for (let i = 0; i < actionsList.length; i++) {
    actionString += `${i + 1}. - ${actionsList[i].name}\n`;
  }

  choice = returnIntMinMax(actionString, 1, actionsList.length);

  switch (actionsList[choice - 1].function) {
    case treeAction.newMember:
      addMemberActions(person, persons);
      break;
    case treeAction.dead:
      person.deathYear = calculateDeathYear(person, persons);
      break;
    case treeAction.trivia:
      triviaMenu(person, persons);
      break;
    case treeAction.parent:
      person = persons.find((p) => p.id === person.parent);
      break;
    case treeAction.children:
      person = new chooseAmongChildren(person, persons);
      break;
  }
} while (choice != actionsList.length);

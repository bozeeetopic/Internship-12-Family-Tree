function chooseAmongChildren(person, persons) {
  let children = persons.filter((p) => p.parent === person.id);

  let actionString = "Unesi broj uz dite:\n\n";
  for (let i = 0; i < children.length; i++) {
    actionString += `${i + 1}. - ${children[i].name}\n`;
  }

  let childIndex = returnIntMinMax(actionString, 1, children.length);

  return isNaN(childIndex) ? person : children[childIndex - 1];
}

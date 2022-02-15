function printTree(sameLevelPersons, persons) {
  if (sameLevelPersons == null || sameLevelPersons.length == 0) {
    return "";
  }

  let stringToReturn = "";
  sameLevelPersons.forEach(
    (p) =>
      (stringToReturn +=
        p.name +
        (p.significantOther == null
          ? ""
          : ` (${persons.find((s) => s.significantOther === p.id)?.name})`) +
        "\t")
  );
  stringToReturn += "\n";

  let nextLevel = [];
  sameLevelPersons.forEach((p) =>
    persons.some((f) => f.parent === p.id)
      ? nextLevel.push(persons.filter((f) => f.parent === p.id))
      : console.log("")
  );

  return stringToReturn + printTree(nextLevel, persons);
}

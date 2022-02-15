function calculateDeathYear(person, persons) {
  let children = persons.filter((p) => p.parent === person.id);
  let minYear;

  minYear =
    children == null || children.length == 0
      ? person.birthYear
      : Math.min(children.map((c) => c.birthYear)) + 1;

  let deathYear = returnIntMinMax(
    `Unesi godinu smrti ${person.name}, minimum je: ${minYear}`,
    minYear,
    new Date().getFullYear()
  );

  return isNaN(deathYear) ? null : deathYear;
}

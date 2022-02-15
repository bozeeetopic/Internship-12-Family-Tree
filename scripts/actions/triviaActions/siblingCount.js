function siblingsCount(person, persons) {
  let siblings = [...persons.filter((p) => p.parent === person.parent)];
  alert(`Broj braće i sestara: ${siblings.length - 1}`);
}

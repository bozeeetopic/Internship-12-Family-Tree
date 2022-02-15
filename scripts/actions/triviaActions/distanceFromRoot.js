function distanceFromRoot(person, persons) {
  let distance = 0;
  distance = CalculateDistance(person, persons);
  alert(`Udaljenost od pretka: ${distance}`);
}
function CalculateDistance(person, persons) {
  return person.id === persons[0].id
    ? 0
    : 1 +
        CalculateDistance(
          persons.find((p) => p.id === person.parent),
          persons
        );
}

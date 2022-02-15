function addMemberActions(person, persons) {
  if (person.significantOther == null) {
    let deathCheck =
      person.deathYear == null
        ? new Date().getFullYear() - 6
        : person.deathYear - 6;
    let maxYear = Math.min(new Date().getFullYear() - 6, deathCheck);

    let newName = prompt("Unesi ime supružnika:");
    if (!newName) {
      return;
    }

    let newSurname = prompt("Unesi prezime supružnika:");
    if (!newSurname) {
      return;
    }

    let newBirthYear = returnIntMax(
      `Unesi godinu rođenja supružnika, do maks ${maxYear}: `,
      maxYear
    );
    if (isNaN(newBirthYear)) {
      return;
    }

    let newGender = confirm("Odaberi ok za muški spol, ili cancel za žensko")
      ? gender.male
      : gender.female;

    let newPerson = new Person(
      persons.length,
      newName,
      newSurname,
      null,
      newBirthYear,
      null,
      newGender,
      person.id
    );
    person.significantOther = newPerson.id;
    persons.push(newPerson);
  } else {
    let personDeathCheck =
      person.deathYear == null
        ? new Date().getFullYear()
        : person.deathYear - 1;
    let wife = persons.find((p) => p.significantOther === person.id);
    let wifeDeathCheck =
      wife.deathYear == null ? new Date().getFullYear() : wife.deathYear - 1;

    let minYear = Math.max(person.birthYear + 6, wife.birthYear + 6);
    let maxYear = Math.min(
      new Date().getFullYear(),
      personDeathCheck,
      wifeDeathCheck
    );

    let newName = prompt("Unesi ime djeteta:");
    if (!newName) {
      return;
    }

    let newBirthYear = returnIntMinMax(
      `Unesi godinu rođenja djeteta, između ${minYear} i ${maxYear}: `,
      minYear,
      maxYear
    );
    if (isNaN(newBirthYear)) {
      return;
    }

    let newGender = confirm("Odaberi ok za muški spol, ili cancel za žensko")
      ? gender.male
      : gender.female;

    let newPerson = new Person(
      persons.length,
      newName,
      person.surname,
      person.id,
      newBirthYear,
      null,
      newGender,
      null
    );
    persons.push(newPerson);
  }
}

function averageGenderAge(person, persons) {
  let genderGroup = persons.filter((p) => p.gender === person.gender);
  genderGroup =
    person.gender == gender.male
      ? genderGroup
      : genderGroup.filter((p) => p.surname === persons[0].surname);

  let averageAge = 0;
  genderGroup.forEach(
    (p) =>
      (averageAge +=
        p.deathYear == null
          ? Math.abs(p.birthYear - new Date().getFullYear())
          : Math.abs(p.birthYear - p.deathYear))
  );
  averageAge /= genderGroup.length;

  person.gender == gender.male
    ? alert(`Prosječna dob muškaraca je: ${averageAge}`)
    : alert(`Prosječna dob žena je: ${averageAge}`);
}

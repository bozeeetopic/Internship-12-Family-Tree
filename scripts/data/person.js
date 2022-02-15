class Person {
  constructor(
    id,
    name,
    surname,
    parent,
    birthYear,
    deathYear,
    gender,
    significantOther
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.parent = parent;
    this.birthYear = birthYear;
    this.deathYear = deathYear;
    this.gender = gender;
    this.significantOther = significantOther;
  }

  toString() {
    let stringToReturn = "";
    stringToReturn += `${this.name} `;
    stringToReturn += `${this.surname} `;
    stringToReturn +=
      this.gender === gender.male ? `- Muško\t\t` : `- Žensko\t\t`;
    stringToReturn += `${this.birthYear} `;
    stringToReturn +=
      this.deathYear !== null ? `- ${this.deathYear}\t\t` : `- Još živ/a\t\t`;
    stringToReturn += this.parent !== null ? `Id: ${this.parent}\t` : `Bog\t\t`;
    stringToReturn +=
      this.significantOther !== null ? `Oženjen/a\n` : `Neoženjen/a\n`;

    return stringToReturn;
  }
}

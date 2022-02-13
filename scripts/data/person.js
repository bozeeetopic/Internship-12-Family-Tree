class Person {
    constructor(name,surname,parent,birthDate,deathDate,gender,significantOther) {
      this.name = name;
      this.surname = surname;
      this.parent = parent;
      this.birthDate = birthDate;
      this.deathDate = deathDate;
      this.gender = gender;
      this.significantOther = significantOther;
    }

    toString() {
      let stringToReturn = "";
      stringToReturn += `${this.name} `;
      stringToReturn += `${this.surname} `;
      if(this.gender === gender.male)
      {
        stringToReturn += `Muško\t`;
      }
      else
      {
        stringToReturn += `Žensko\t`;
      }
      stringToReturn += `${this.birthDate} `;

      if(this.deathDate !== null)
      {
        stringToReturn += `${this.deathDate}\t`;
      }

      if(this.parent !== null)
      {
        stringToReturn += `${this.parent.name}\t`;
      }

      if(this.significantOther !== null)
      {
        stringToReturn += `${this.significantOther.name}\t`;
      }

      return stringToReturn;
    }
  }
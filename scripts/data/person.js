class Person {
    constructor(id, name,surname,parent,birthYear,deathYear,gender,significantOther) {
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.parent = parent;
      this.birthYear = birthYear;
      this.deathYear = deathYear;
      this.gender = gender;
      this.significantOther = significantOther;
    }

    toString() 
    {
      let stringToReturn = "";
      stringToReturn += `${this.name} `;
      stringToReturn += `${this.surname} `;
      if(this.gender === gender.male)
      {
        stringToReturn += `- Muško\t\t`;
      }
      else
      {
        stringToReturn += `- Žensko\t\t`;
      }
      stringToReturn += `${this.birthYear} `;

      if(this.deathYear !== null)
      {
        stringToReturn += `- ${this.deathYear}\t`;
      }
      else 
      {
        stringToReturn += `- Još živ\t`;
      }

      if(this.parent !== null)
      {
        stringToReturn += `${this.parent.name}\t`;
      }
      else 
      {
        stringToReturn += `Bog\t\t`;
      }

      if(this.significantOther !== null)
      {
        stringToReturn += `${this.significantOther.name}\t`;
      }
      else 
      {
        stringToReturn += `Neoženjen\t`;
      }

      return stringToReturn;
    }
  }
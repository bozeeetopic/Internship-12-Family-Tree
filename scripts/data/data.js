function returnData()
{
    let persons = [];
    persons.push(new Person("Adam","Prvić",null,new Date(-20000,1,1),new Date(0,1,1),gender.male,persons[1]));
    persons.push(new Person("Eva","Rebrić",null,new Date(-20000,2,2),new Date(0,1,1),gender.female,persons[0]));
    console.log(persons[0].toString());
    return persons;
}
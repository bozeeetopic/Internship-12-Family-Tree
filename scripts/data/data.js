function returnData()
{
    let persons = [];
    persons.push(new Person(1,"Adam","Prvić",null,-20000,0,gender.male,2));
    persons.push(new Person(2,"Eva","Rebrić",null,-20000,0,gender.female,1));
    persons.push(new Person(3,"Elizabeta","Kraljica",1,-199982,null,gender.female,null));
    return persons;
}
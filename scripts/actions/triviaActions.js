function triviaActionsList()
{
    let actions = [];
    actions.push({name: "Udaljenost od pretka", function: triviaAction.rootDistance});
    actions.push({name: "Broj braće i sestara", function: triviaAction.siblingsCount});
    actions.push({name: "Prosječna životna dob spola", function: triviaAction.averageAge});
    actions.push({name: "Tabica imena", funtion: triviaAction.nameCounter});
    actions.push({name: "Ispis stabla", funtion: triviaAction.printTree});
    actions.push({name: "Natrag", funtion: triviaAction.back});
}

function distanceFromRoot(person, persons)
{
    let distance = 0;
    distance = CalculateDistance(person, persons);
    alert(`Udaljenost od pretka: ${distance}`);
}
function CalculateDistance(person, persons)
{
    return (person.id === persons[0].id ? 0 : 1 + CalculateDistance(persons.find(p => p.id === person.parent), persons));
}

function siblingsCount(person, persons)
{
    let siblings = [...persons.filter(p => p.parent === person.parent)];
    alert(`Broj braće i sestara: ${siblings.length - 1}`);
}

function averageAge(person, persons)
{
    let genderGroup = [...persons.filter(p => p.gender === person.gender)];
    genderGroup = (person.gender == gender.male ?  genderGroup : 
        [...genderGroup.filter(p => p.surname === persons[0].surname)])
    
    let averageAge = 0;
    genderGroup.forEach(p => (
        averageAge += ( p.deathYear == null ? 
            Math.abs(p.birthYear - new Date().getFullYear()) : 
            Math.abs(p.birthYear - p.deathYear))
    ));
    averageAge /= genderGroup.length;

    (person.gender == gender.male ? 
        alert(`Prosječna dob muškaraca je: ${averageAge}`) :
        alert(`Prosječna dob žena je: ${averageAge}`))
}

function nameCounter(persons)
{

}
function printTree(sameLevelPersons, persons)
{
    sameLevelPersons.forEach(p => console.log(p.name))
}
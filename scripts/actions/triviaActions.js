function triviaActionsList()
{
    return [{name: "Udaljenost od pretka", function: triviaAction.rootDistance},
            {name: "Broj braće i sestara", function: triviaAction.siblingsCount},
            {name: "Prosječna životna dob spola", function: triviaAction.averageAge},
            {name: "Tabica imena", function: triviaAction.nameCounter},
            {name: "Ispis stabla", function: triviaAction.printTree},
            {name: "Natrag", function: triviaAction.back}];
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
    let genderGroup = persons.filter(p => p.gender === person.gender);
    genderGroup = (person.gender == gender.male ?  genderGroup : 
        genderGroup.filter(p => p.surname === persons[0].surname))
    
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
    let names = [];
    persons.forEach(p => (
        names.some(n => n.name === p.name) ? 
            names.find(n => n.name === p.name).counter++ : 
            names.push({name: p.name, counter: 1})
    ));
    names.sort((a,b) => (a.counter > b.counter) ? 1 : ((b.counter > a.counter) ? -1 : 0));

    let stringNames = "Name\t\t-\t\tCounter\n";
    names.forEach(n => stringNames += `${n.name}\t\t-\t\t${n.counter}\n`);
    alert(stringNames);
}

function printTree(sameLevelPersons, persons)
{
    if(sameLevelPersons == null || sameLevelPersons.length == 0)
    {
        return ""
    }

    let stringToReturn = "";
    sameLevelPersons.forEach(p => (stringToReturn += p.name + 
        (p.significantOther == null ? "" : ` (${persons.find(s => s.significantOther === p.id)?.name})`) + "\t"));
    stringToReturn += "\n";

    let nextLevel = [];
    sameLevelPersons.forEach(p => (persons.some(f => f.parent === p.id) ? nextLevel.push(persons.filter(f => f.parent === p.id)) : console.log("")));

    return stringToReturn + printTree(nextLevel, persons);
}
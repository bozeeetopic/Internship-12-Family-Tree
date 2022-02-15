function nameCounter(persons) {
  let names = [];
  persons.forEach((p) =>
    names.some((n) => n.name === p.name)
      ? names.find((n) => n.name === p.name).counter++
      : names.push({ name: p.name, counter: 1 })
  );
  names.sort((a, b) =>
    a.counter > b.counter ? 1 : b.counter > a.counter ? -1 : 0
  );

  let stringNames = "Name\t\t-\t\tCounter\n";
  names.forEach((n) => (stringNames += `${n.name}\t\t-\t\t${n.counter}\n`));
  alert(stringNames);
}

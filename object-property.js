const students = [
    {id: "21", name: "Omar"},
    {id: "31", name: "Manna"},
    {id: "41", name: "puApu"},
    {id: "71", name: "Deep"},
];
// const output = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const result = element.name;
//     output.push(result);
// }
// console.log(output);

const names = students.map(s => s.name);
console.log(names);

const ids = students.map(s => s.id);
console.log(ids);

const biggest = students.filter(x => x.id > 40);
console.log(biggest);

const bigger = students.find(z => z.id>40);
console.log(bigger);

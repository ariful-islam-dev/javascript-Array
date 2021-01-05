const numbers = [1, 2, 7, 4, 5];

numbers[2] = 3;

console.log(numbers);

//Array of Objects
const students = [
  { id: 1, name: "Ariful Islam" },
  { id: 2, name: "Abdullah Al Zarif" },
  { id: 3, name: "Aysha Mone" },
  { id: 4, name: "Toraf Ali Howlader" },
  { id: 5, name: "Halima Begum" },
];

const givenID = 3;
const updatedName = "Sadiqul Islam Jamil";

for (let i = 0; i < students.length; i++) {
  if (givenID === students[i].id) {
    students[i].name = updatedName;
    break;
  }
}

console.log(students);
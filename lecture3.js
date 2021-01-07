const studentArray = [
  {
    id: 1,
    name: "Ariful Islam",
    gpa: 5.0,
    email: "ariful4082@gmail.com",
    due: true,
    dueAmount: 10000,
  },
  {
    id: 2,
    name: "Johirul Islam",
    gpa: 3.99,
    email: "johirul@gmail.com",
    due: true,
    dueAmount: 10000,
  },
  {
    id: 3,
    name: "Azizul Islam",
    gpa: 0.0,
    email: "azizul@gmail.com",
    due: false,
    dueAmount: 0,
  },
  {
    id: 4,
    name: "Asia Akter",
    gpa: 2.52,
    email: "asia@gmail.com",
    due: true,
    dueAmount: 9000,
  },
  {
    id: 5,
    name: "Abdullah Al Zarif",
    gpa: 5.0,
    email: "zarif@gmail.com",
    due: true,
    dueAmount: 12000,
  },
  {
    id: 6,
    name: "Sadiqul Islam Jamil",
    gpa: 5.0,
    email: "jaril@gmail.com",
    due: false,
    dueAmount: 0,
  },
];

const lowGpa = studentArray.filter(value=>value.gpa<3)
// console.log(lowGpa);
const dueStudents = studentArray.filter(value=>value.dueAmount>0)
console.log(dueStudents);
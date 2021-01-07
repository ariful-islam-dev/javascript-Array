const studentArray = [
  { id: 1, name: "Ariful Islam", gpa: 5.0, email: "ariful4082@gmail.com" },
  { id: 2, name: "Johirul Islam", gpa: 3.99, email: "johirul@gmail.com" },
  { id: 3, name: "Azizul Islam", gpa: 1.5, email: "azizul@gmail.com" },
  { id: 4, name: "Asia Akter", gpa: 2.52, email: "asia@gmail.com" },
  { id: 5, name: "Abdullah Al Zarif", gpa: 5.0, email: "zarif@gmail.com" },
  { id: 6, name: "Sadiqul Islam Jamil", gpa: 4.98, email: "jaril@gmail.com" },
];
const emailTemplate = studentArray.filter((value) => value.gpa < 3).map(value=>{
    return{
        ...value,
        title:'Result Published',
        msg: 'You Have Failed'
    }
});

console.log(emailTemplate);
let products = [
  { name: "Javascript Cokkbook", price: 350 },
  { name: "Head First Python", price: 200 },
  { name: "Head First Java", price: 400 },
  { name: "Javascript Cokkbook", price: 350 },
  { name: "Head First Java", price: 400 },
  { name: "Javascript Cokkbook", price: 350 },
  { name: "Javascript Cokkbook", price: 350 },
  { name: "Head First C", price: 300 },
];

const invoice = products.reduce((acc, cur) => {
  if (acc[cur.name]) {
      acc[cur.name].quantity++;
      acc[cur.name].price += cur.price
  } else {
    acc[cur.name] = {
      price: cur.price,
      quantity: 1,
      
    };
  }
  return acc;
}, {});

console.log(invoice);
let pizzaPlace = "Papa Johns";
let numberOfToppings = 4;
console.log(pizzaPlace);
console.log(numberOfToppings);
console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);
console.log(`I got a pizza from ${pizzaPlace}. I requested the following ${numberOfToppings} toppings: pepperoni, sausage, green peppers, and onions.`);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.")
} else {
  console.log("A whole lot of pizza.")
}

for (let i = 2; i <= numberOfToppings; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

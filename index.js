//---------------Завдання 1. Робота з масивами та об'єктами (Spread)---------------
// ----------------------------Частина 1 масиви---------------------
const firstCategory = ['Laptop', 'Phone', 'Tablet'];
const secondCategory = ['Monitor', 'Keyboard', 'Mouse'];
const addChanges = ['Printer', 'Webcam'];
const allProducts = [...firstCategory, ...secondCategory];
const updatedProducts = [...allProducts, ...addChanges];
console.log(allProducts);
console.log(updatedProducts);
// ----------------------------частина 2 об'єкти-----------------
const product = {
  name: 'Laptop',
  price: 25000,
  category: 'Electronics',
};

const productDetails = {
  brand: 'Apple',
  color: 'Silver',
  price: 30000,
};
const fullProduct = { ...product, ...productDetails };
const productChanges = {
  price: 28000,
  color: 'Black',
};
const updatedProduct = { ...fullProduct, ...productChanges };
console.log(fullProduct);
console.log(productChanges);
console.log(updatedProduct);
//-------Завдання 2. Обробка результатів тестування (Rest, Spread, Arrow Functions)---------
const marks = [85, 92, 76, 100, 88, 95, 67];
const calculateAverage = (...args) => {
  let sum = 0;
  let average = 0;
  for (let mark of args) {
    sum += mark;
  }
  average = sum / args.length;
  return average;
};
console.log(calculateAverage(...marks));
//---------Завдання 3. Обробка замовлення (Callback Functions)-----------------
const showFreeDelivery = () => {
  console.log('Your delivery is free!');
};
const showPaidDelivery = () => {
  console.log('Your delivery costs 100 UAH.');
};

const processOrder = (orderAmount, callback) => {
  if (orderAmount >= 1000) {
    callback();
  } else {
    callback();
  }
};
processOrder(1500, showFreeDelivery);
processOrder(750, showPaidDelivery);
processOrder(1000, showFreeDelivery);

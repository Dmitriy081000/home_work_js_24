/*
 * #1
 * Задача: Калькулятор калорійності продуктів через клас.
 * Завдання: Розробити модуль на JavaScript, який імплементує клас CalorieCalculator. Клас має використовувати Map для управління даними про калорійність продуктів. Необхідно реалізувати наступні функціональності:
 * Додавання продуктів: Метод addProduct приймає назву продукту та його калорійність, додаючи їх до колекції.
 * Отримання калорійності продукту: Метод getProductCalories повертає калорійність продукту за його назвою. Якщо продукт не знайдено, повертає рядок 'Product not found'.
 * Видалення продукту: Метод removeProduct видаляє продукт з колекції за назвою.
 *
 * Критерії перевірки:
 * Клас CalorieCalculator має бути реалізований з використанням ключового слова class.
 * Внутрішнє сховище продуктів має бути реалізоване за допомогою new Map().
 * Наявність методів addProduct, getProductCalories, та removeProduct.
 */

// class CalorieCalculator {
//     constructor() {
//         this.fruit = new Map()
//     }
  
//     addProduct(productName, calori) {
//         return this.fruit.set(productName, calori);
//       // code here
//     }
  
//     getProductCalories(productName) {
//         if (this.fruit.has(productName)){
//               return this.fruit.get(productName) 
//         } else {
//               return 'Fruit not found'
//         }
//       // code here
//     }
  
//     removeProduct(productName) {
//         if (this.fruit.has(productName)){
//             return this.fruit.delete(productName)
//           }
//     }
// }
  
//   // Демонстрація використання
//   const calorieCalculator = new CalorieCalculator()
//   calorieCalculator.addProduct('Apple', 52)
//   calorieCalculator.addProduct('Banana', 89)
  
//   console.log(calorieCalculator.getProductCalories('Apple')) // 52
//   console.log(calorieCalculator.getProductCalories('Banana')) // 89
  
//   calorieCalculator.removeProduct('Apple')
//   console.log(calorieCalculator.getProductCalories('Apple')) // Product not found
  
  /*
   * #2
   * Задача: Унікальні користувачі.
   * Завдання: Реалізувати модуль на JavaScript у формі класу UniqueUsernames, який використовує Set для збереження унікальних імен користувачів. Клас має надавати можливість:
   * Додавання імен користувачів: Метод addUser дозволяє додати нове ім'я до набору. Якщо ім'я вже існує, воно не буде додано повторно, зберігаючи унікальність імен у наборі.
   * Перевірка наявності імені: Метод exists перевіряє, чи існує задане ім'я серед збережених унікальних імен.
   * Отримання кількості унікальних імен: Метод count повертає кількість унікальних імен, збережених у наборі.
   *
   * Критерії перевірки:
   * Наявність методів addUser, exists, count у класі UniqueUsernames.
   * Використання конструкції class для створення класу UniqueUsernames.
   * Застосування new Set() для внутрішнього сховища імен користувачів у конструкторі класу.
   */
  
  class UniqueUsernames {
    constructor() {
      this.newName = new Set()
    }
  
    addUser(username) {
     return this.newName.add(username);
      // code here
    }
  
    exists(username) {
      return this.newName.has(username);

      // code here
    }
  
    count() {
      return this.newName.size;

      // code here
    }
  }
  
  // Демонстрація використання
  const uniqueUsernames = new UniqueUsernames()
  uniqueUsernames.addUser('john_doe')
  uniqueUsernames.addUser('jane_doe')
  uniqueUsernames.addUser('john_doe') // Ця дія не змінить набір, оскільки 'john_doe' вже існує
  
  console.log(`Існує 'john_doe': ${uniqueUsernames.exists('john_doe')}`) // true
  console.log(`Кількість унікальних імен: ${uniqueUsernames.count()}`) // 2
  


// let toCk = function (arr) {
//     let newArr = [],
//     length = arr.length;
//     for (let i = 0; i < length; i++) {
//         if (arr[i] !=0 && (arr % 2 == 0)) {
//              newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(toCk())

// var multiplicity = function (arr) {
//     var newArr = [],
//         d = arr.length;
//     for (var i = 0; i < d; i++) {
//         if (arr[i] != 0 && (arr[i] % 3 == 0 || arr[i] % 5 == 0 || arr[i] % 7 == 0)) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// };
// let x =multiplicity()
// console.log(x())



//========================================================

// const fruits = {
//   apple: "red",
//   kiwi: "green",

//   get fruit() {
//       return `${this.apple} ${this.kiwi}`
//   },

//   set fruit(name) {
//       [this.apple, this.kiwi] = name.split(' ')
//   }
// }

// console.log(fruits.fruit);
// // console.log(fruit);
// fruits.fruit = "orange core"
// console.log(fruits.fruit);

//========================================================

// const obj = {};

// Object.defineProperty(obj, 'prop', {
//   value: 42,
//   writable: false,
//   enumerable: true,
//   configurable: true
// });

// console.log(obj.prop)

// obj.prop = 1
// console.log(obj.prop)
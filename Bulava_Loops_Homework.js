/*Виведіть в консоль числа від 1 до n використовуючи цикл for. (Дано: n = 10)*/

let n = 10;
for (i = 1; i <= n; i++) {
    console.log(i)
    };

/*Напишіть цикл, який обчислює суму чисел від 1 до n. (Дано: n = 100)*/

let n = 100;
let total = 0;
for (i = 1; i <= n; i++) {
	total += i};
console.log(total);

/*Використовуючи цикл while, виведіть в консоль числа від n до 1. (Дано: n = 10)*/

let n = 10;
while (n > 0 ){
	console.log(n);
    n--;
};

/*Напишіть цикл, який виводить всі парні числа від 1 до n. (Дано: n = 50)*/

let n = 50;
for (i = 1; i <= n; i++)
	if (i % 2 === 0) {
  console.log(i)
  };

/*Виведіть в консоль таблицю множення від 1 до n використовуючи вкладені цикли. (Дано: n = 10)*/

let n = 10;
for (i = 1; i <=n; i++) {
    for (j = 1; j <=n; j++){
      console.log(i + "*" + j + "=" + i*j)
      }
    };

/*Обчисліть факторіал числа n, використовуючи цикл. (Дано: n = 7)*/

let n = 7;
let fact = 1;
  for (i = 1; i <=n ; i++) {
  fact *= i};
console.log("Factorial of 7 is " + fact);

/*Виведіть перші n чисел послідовності Фібоначчі. (Дано: n = 10)*/

let n = 10;
let n1 = 0;
let n2 = 1;
for (i = 1; i <= n; i++){
    console.log(n1);
    nextSum = n1 + n2;
    n1 = n2;
    n2 = nextSum;
};

/*Виведіть всі прості числа від 1 до n. (Дано: n = 100)*/

let n = 100;
let counter = 0;
for (i = 2; i <=n; i++) {
    for (j = 1; j <= i; j++) {
    if (i % j == 0)
    counter++
    }
    if(counter == 2)
    console.log(i)
    counter = 0;
};

/*Створіть масив чисел від 1 до n, а потім виведіть тільки ті числа, що діляться на 5 без остачі. (Дано: n = 100)*/

let n = 100;
let array = [];
for (i = 1; i <=100; i++) {
    if(i % 5 === 0)
    array.push(i)}
console.log(array);

/*Дано масив чисел. Обчисліть суму чисел в цьому масиві. (Дано: масив = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (i = 0; i < array.length; i++) {
    sum += array[i];}
console.log("Sum of array numbers is " + sum);
# JavaScript

# Зміст

${toc}

# JavaScript

**JavaScript (JS)** — це невибаглива до ресурсів мова програмування з функціями першого класу, код якої інтерпретується та компілюється під час виконання. Хоча JavaScript насамперед відома як скриптова мова для веб-сторінок, вона також використовується у багатьох небраузерних середовищах на кшталт Node.js


## Версіонування
Спочатку трохи історії. JavaScript створювався як скриптова мова для Netscape. Після чого він був відправлений в ECMA International для стандартизації (ECMA - це асоціація, діяльність якої присвячена стандартизації інформаційних і комунікаційних технологій). Це призвело до появи нового мовного стандарту, відомого як ECMAScript.

Подальші версії JavaScript вже були засновані на стандарті ECMAScript. Простіше кажучи, ECMAScript - стандарт, а JavaScript - найпопулярніша реалізація цього стандарту.

ES - це просто скорочення для ECMAScript. Кожне видання ECMAScript отримує абревіатуру ES з подальшим його номером. Всього існує 8 версій ECMAScript. ES1 була випущена в червні 1997 року, ES2 - в червні 1998 року, ES3 - в грудні 1999 року, а версія ES4 - так і не була прийнята. ES5 був випущений в грудні 2009 року, через 10 років після виходу третього видання.

Версія ES6 / ES2015 вийшла в червні 2015 року. Це також принесло якусь плутанину в зв'язку з назвою пакета, адже ES6 і ES2015 - це одне і те ж. З виходом цього пакету оновлень комітет прийняв рішення перейти до щорічних оновлень. Тому видання було перейменовано в ES2015, щоб відображати рік релізу. Подальші версії також називаються відповідно до року їх випуску. ES2016 (ES7) вийшла в червні 2016 року.

# Оголошення змінних

Змінна складається з імені та виділеної області пам'яті, яка йому відповідає.

JavaScript є динамічно - типізованою мовою програмування. Це означає, що вам не потрібно оголошувати тип змінної. JavaScript автоматично визначає його для вас. Це також означає, що тип змінної може змінитися.

Для оголошення або, іншими словами, створення змінної використовується ключове слово var:

```js
var count = 1;
var text = 'Hello world';
```

# Типи даних
В JavaScript існує 5 примітивних типів даних:

 - Число (number)
 - Строка (string)
 - Логічний (boolean)
 - Спеціальне значення "null"
 - Спеціальне значення "undefined"
 
 Все інше в Java Script - це об'єкти(object)

## number

```js
var num1 = 123;
var num2 = 12.345;
    
console.log("Type of num1 is " + typeof(num1));
console.log("Type of num2 is " + typeof(num1));
```
 
 Існують спеціальні числові значення Infinity (безкінечність) і NaN (помилка обчислень).
 
```js
var a = 1/0;
var b = "text" * 2;
    
console.log("A is " + a);
console.log("B is " + b);
```

## string

```js
var text = "Hello World!";
var text2 = 'Hello World1';
    
console.log(text + text2);
```

Тип символ не існує, є тільки рядок(string).
  
**Одинарні або подвійні?**
JQuery використовує подвійні, але більшість інших бібліотек і фреймворків використовує одинарні. Ось наприклад творець Node.js чомусь категорично проти подвійних лапок.

## boolean

```js
var chacked = true;
var unchecked = false;
    
console.log(chacked);
console.log(unchecked);
```

## null

```js
var age = null;
```

В JavaScript null не є «посиланням на неіснуючий об'єкт» або «нульовим покажчиком», як в деяких інших мовах. Це просто спеціальне значення, яке має сенс «нічого» або «значення невідомо».

## undefined

Значення undefined, як і null, утворює свій власний тип, що складається з одного цього значення. Воно має сенс «значення не присвоїли».

```js
var x;
    
console.log(x);
```

## object
  
Об'єкт є агрегацією властивостей. Властивість може посилатися на об'єкт або примітив.

```
var  empty = {};
var client = {name: 'name1', age: 20};
    
empty.newField = 3; //Додаємо поле
delete empty.newField; //Видаляємо поле
empty.doSome = function(){}; //Ось і метод під'їхав
    
console.log(a.name + ' ' a.age);
```
    
Примітивні типи boolean, string та number можуть бути обернуті їхніми об'єктами. Ці об'єкти є екземплярами Boolean, String та конструкторів Number відповідно.

```js
var str = new String("str");
var is_ok = new Boolean(true);
var count = new Number(3.3);

    
console.log(str.length);
```

# Чи дійсно в Java Script існують примітивні типи даних?
Примітиви - це значення, вони не мають властивостей. Якщо примітиви не мають властивостей, чому "abc". Length повертає значення? Код "abc". Length працює, тому що JS може легко конвертувати примітивні типи в їх відповідні об'єкти обгортки. Тому, так примітивні типи в JS існують.

# Масиви
**Маси́в** — впорядкований набір фіксованої кількості однотипних елементів, що зберігаються в послідовно розташованих комірках оперативної пам'яті, мають порядковий номер і спільне ім'я, що надає користувач.

```js
var arr = [];
var numbers = [1, 2, 3];
numbers = [];
    
var a;
a = [];
    
console.log(arr[0]); //undefined
onsole.log(arr.length); //0
```

У масиві JS може зберігатися будь-яке число елементів будь-якого типу.

```js
var arr = [ 1, 'name', { name: 'John' }, true ];
```
    
Масиви в JavaScript реалізують структури даних - стек і черга.

## Масив як стек і черга

Кінець масиву:
 -   push() - покласти на вершину стека
 -    pop() - забрати з вершини стека
 
Початок масиву:
-   shift() - видаляє елемент із початку
-    unshift() - додає елемент в початок масиву

```js
var stack = [];
stack.push(2);
stack.push(5);
var i = stack.pop();
console.log(i);

var queue = [];
queue.push(2);
queue.push(5);
var i = queue.shift();
console.log(i);  
```

# Умовні конструкції

## if...else

```js
    if(умова){
	    //якщо true
    }else{
	    //якщо false
    }
```
    
В JavaScript є два схожих оператора: == і ===. Якщо не знати їх відмінності, це може обернутися купою помилок.
Оператор == порівнює на рівність, а === - на ідентичність. Плюс оператора === полягає в тому, що він не приводить два значення до одного типу.


## Тернарний оператор

Умовний (тернарний) оператор - єдиний оператор в JavaScript, що приймає три операнди. Він часто використовується як укороченний варіант оператора if.

```js
умова ? вираз1 : вираз2
    
var elvisLives = Math.PI > 4 ? "Так" : "Ні";
console.log(elvisLives);
```

## switch

```js
var a = 2 + 2;
switch (a) {
    case  3: console.log('Мало');
        break;
    case  4: console.log('В точку!');
        break;
    case  5: console.log('Багато');
        break; 
    default: console.log('Таких значень бути не може!'); 
}
```

Провалювання.

```js
var a = 1;

switch(a){
    case  1: console.log(1);
    case  2: console.log(2);
    default: console.log(3);
}
```

# Циклічні конструкції
**Цикл** — різновид керівної конструкції у високорівневих мовах програмування, призначена для організації багаторазового виконання набору інструкцій (команд).

Існує 6 видів циклів:

- Безумовні цикли
- Цикл з передумовою
- Цикл з післяумовою
- Цикл з виходом з середини
- Цикл з лічильником
- Цикл по колекції (foreach)

## Цикл з передумовою while

```js
while  (умова) {
    // тіло 
}
```

## Цикл з післяумовою do..while

```js
do{
    //вираз
} while (умова);
```

## Цикл з лічильником for

```js
for (початок; умова; крок) {
    // тіло 
}
```

# Функції

Об'єктами першого класу (англ. First-class object, first-class entity, first-class citizen) в контексті конкретної мови програмування називаються елементи, які можуть бути передані як параметр, повернуті з функції, присвоєні змінної.

В JavaScript функції є об'єктами першого класу.

```js
function назва(параметри){
    тіло функції 
} 

function print(text, withEndl){
    console.log(text);
} 

var ім'я = function(параметри){
    тіло функції
} 

var print = function(text, withEndl){
    console.log(text);
}
```

## Параметри за замовчуванням(ES5)

```js
function multiply(a, b) {
b = typeof b !== 'undefined' ? b : 1; return a*b;
} 
multiply(5); // 5
```

## Область видимості в JavaScript

### Глобальний об'єкт

Глобальними називають змінні і функції, які не перебувають всередині якоїсь функції. Тобто, іншими словами, якщо змінна або функція не перебувають всередині конструкції function, то вони - «глобальні».

В JavaScript все глобальні змінні і функції є властивостями спеціального об'єкта, який називається «глобальний об'єкт» (global object).

```js
var a = 5;
alert( global.a );
```

Створити змінну можна і явним присвоюванням в глобальний об'єкт.

```js
window.a = 5;
alert( a );
```

### Глобальні змінні

```js
function some(){
    a = 3;
}

function some2(){
    console.log(a);
}
```

### var в for і if

var в циклах і умовних конструкція виходять за свю область видимості:

```js
for(var i = 0; i < 5; i++ ){
    print(i);
}

print(i); //prints 5

if(i > 4){
    var b = 77;
}

print(b); //prints 77
```

## use strict

Дуже довго мову JavaScript розвивався без втрати сумісності. Нові можливості додавалися в мову, але старі - ніколи не змінювалися, щоб не «зламати» вже існуючі HTML / JS-сторінки з їх використанням.

Однак, це призвело до того, що будь-яка помилка в дизайні мови ставала «вморожених» в нього назавжди.

Так було до появи стандарту ECMAScript 5 (ES5), який одночасно додав нові можливості і вніс в мову ряд виправлень, які можуть привести до того, що старий код, який був написаний до його появи, перестане працювати.

Щоб цього не сталося, вирішили, що за замовчуванням ці небезпечні зміни будуть вимкнені, і код буде працювати по-старому. А для того, щоб перевести код в режим повної відповідності сучасним стандартом, потрібно вказати спеціальну директиву use strict.

```js
"use strict";

a = 3; //error
```

## Функція зворотнього виклику Callback

**Простими словами:** callback - це функція, яка повинна бути виконана після того, як інша функція завершила виконання (звідси і назва: callback - функція зворотного виклику).
**Трохи складніше:** В JavaScript функції - це об'єкти. Тому функції можуть приймати інші функції в якості аргументів, а також функції можуть повертати функції в якості результату. Функції, які це вміють, називаються функціями вищого порядку. А будь-яка функція, яка передається як аргумент, називається callback-функцією.
Callback потрібні з однієї простої причини - JavaScript це подієво-орієнтована мова. Це означає, що замість того, щоб чекати відповіді для подальшого виконання програми, JavaScript продовжить виконання, одночасно чекаючи інших подій. Давайте розберемо простий приклад:

```js
function first(){
    console.log(1);
} 
function second(){
console.log(2);
} 
first();
second();
```

Як ви і чекаєте, функція first виконається першої, а функція second після неї, і в консолі буде виведений наступний результат:

```js
    // 1 
    // 2
```

Поки що все зрозуміло. Але що якщо функція first містить якийсь код, який не може виконаєтися негайно? Наприклад, запит до API, де ми відправляємо запит і повинні чекати відповіді. Щоб змоделювати таку ситуацію, ми використовуємо функцію setTimeout

```js
function first(){
    setTimeout( function(){ 
    console.log(1);
    }, 500 ); } 
function second(){ console.log(2); } 
first(); 
second();
```

Неважливо, чи розумієте ви зараз, як працює setTimout (). Основна ідея - тепер ми відклали виконання команди console.log (1) на 500 мілісекунд. І що тепер виведе наша програма?

```js
    // 2
    // 1
```
    
 ```js
function doHomework(subject) {
    console.log(`Starting my ${subject} homework.`);
}
doHomework('math'); // Starting my math homework.

function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
}
doHomework('math', function () {
    console.log('Finished my homework');
});

function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
} function alertFinished() {
    console.log('Finished my homework');
}
doHomework('math', alertFinished);
```

# Java Script. ООП

![](../resources/img/js/img-1.png)

```js
    function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function () {
        console.log("Hi my name is " + this.name);
    }
}
var person = new Person("Alex", 13);
person.sayHi(); console.log(person.age);

//add to prototype
function Animal(name, speed) {
    this.name = name; this.speed = speed;
}
Animal.prototype.sayHi = function () {
    console.log("Hi my name is " + name);
}
var animal = new Animal("Jeck", 200);
console.log(animal.sayHi());
//__proto__ vs prototype
function Animal(name, speed) {
    this.name = name; this.speed = speed;
}
Animal.prototype.sayHi = function () {
    console.log("Hi my name is " + this.name);
}
Animal.prototype.__proto__.sayNumber = function () {
    console.log(1);
}
var animal = new Animal("Jeck", 200);
animal.sayHi();
animal.sayNumber();
//Inheritance
function Animal(name, speed) {
    this.name = name;
    this.speed = speed;
    this.sayHi = function () {
        console.log("Hi im animal");
    }
}
function Rabbit(name, speed) {
    Animal.call(this, name, speed);
    this.sayHi = function () {
        console.log("Hi im rabbit" + this.name);
    }
}
Rabbit.prototype.__proto__ = new Animal();
Rabbit.prototype.constructor = Rabbit;
var rabbit = new Rabbit("Jeck", 200);
rabbit.sayHi();
//private
function A() {
    var a = "This text from private field";
    this.b = "This text from public";
    this.sayPrivate = function () {
        console.log(a);
    }
}
var a = new A();
console.log(a.a);
console.log(a.b);
a.sayPrivate();
```

# Контрольні запитання

 1. Як оголосити змінну в JS? Перелічіть примітивні типи даних. Що таке об'єкт?
 2. Назвіть циклічні конструкції, які можна використовувати в JS?
 3. Які методи масива в JS можна використати для реалізації таких структур, як стек і черга?
 4. Шо таке функції зворотнього виклику?
 5. Як реалізуються принципи ООП в Java Script?
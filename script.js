//зарезервировання команда JavaSript в броузере
//!console.log

// console.log("Hello,World!", "My name Alex");
// console.log("Hello,World!", "My name Sasha");
// console.log("Hello,World!", "My name Dima");

//Браузерное сообщение, уведомление
//!alert (ошибка) это метод который умеет показывать всплывающие окна


// alert("Hello, World!")
// alert("I'm 39 years old!")

// простые переменные
//simple variables
// переменные нужны чтобы один задать и потом много раз возвращаться
// milk = 1;
// eggs = 10;
// bread = 1;

// console.log(eggs);
// console.log(milk, eggs, bread);

// alert(eggs);
// alert("You need to drink" + milk + "milk");

// типы данных
//!string (строка), number (цифра), boolean (логическое значение либо true (да) либо folse (нет)
// x = 10; //number, 10e это 10 в 10 степени, подсвечивается синим на белом фоне
// myNameIs = "Alex" //string, подсвечивается белым или черным
// isRedHair = true; //boolean, подсвечивается синим на белом фоне

// console.log(x);
// console.log(myNameIs);
// console.log(isRedHair);

// age = 39; //number
// catName = "Mars"; //string
// catAge = "3"; //string
// havePets = true; //boolean
// haveDinner = "false"; //string

// x = 5;
// y = 10;
// z = x + y;
// console.log(z); //15

// firstName = "Alexey";
// lastName = "Omelianenko";
// fullName = firstName + " " + lastName;//таким образом " " добавляем пробел между словами
// console.log(fullName);


// milk = 1;
// alert("You need to drink" + " " + milk + " " + "milk");




//Еще один метод внутри нашего браузера
//!prompt это возможность запрашивать у юзера какоето значение

//prompt всегда только string
// age = prompt("How old are you?", 10); //после запятой цифра 10, то что по умолчанию высветиться для user
// console.log(age);

//null если user ни чего не введет, будет переменная null
//hey = null;

//!confirm
//только true или folse
//confirm всегда только boolean




//pet = confirm("Do you like cats?");

//или вопрос занести в переменную
// someQuestion = "Do you like cats?";
// pet = confirm(someQuestion);

// console.log(pet);

//ДЗ № 1

firstName = prompt("What is your name my friend is a programmer?");
alert('"' + "Hello," + " " + firstName + "!" + " " + "How are you?");








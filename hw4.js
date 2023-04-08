// #1 

    // function checkAge(age) {
    //     return (age > 18) ? true :
    //     (age < 18) ? confirm('Родители разрешили?'): '';
    // };
    //console.log(checkAge(22));
  



// #2 - x^n

// function pow(x, n) {
//     let result = x; 
    
//     for (let i = 1; i < n; i++){
//         result *= x;
//     }
//     return result;
// }
//console.log(pow(3,2));



// #3

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );

// #4

//let arr = [5, 2, 1, -10, 8];

//arr.sort((a,b)=> b-a)

//alert( arr ); // 8, 5, 2, 1, -10

// #5

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// alert( names ); // Вася, Петя, Маша

// #6

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id }));

// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]

// alert( usersMapped[1].id ) // 1
// alert( usersMapped[1].fullName ) // Вася Пупкин

// #7
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 29 };
  
  let arr = [ vasya, petya, masha ];
  
  alert( getAverageAge(arr) ); // 28
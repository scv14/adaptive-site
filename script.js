function myFun() {
    let x = document.getElementById("myTopnav");

    if(x.className === "introTextMenu") {
        x.className += " responsive";
    }else{
        x.className = "introTextMenu";
    }
}


// let money, time;

// function start() {
//     money = +prompt("Ваш бюджет на месяц?", '');
//     time = prompt('Введите дату', '');

//     while(isNaN(money) || money == "" || money == null){
//         money = +prompt("Ваш бюджет на месяц?", '');
//     }
// }
// start();
// let appData = {
//     budget: money,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     timeData: time,
//     savings: false
// };
// function chooseExpenses () {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//             b = prompt("Во сколько обойдется?", '');
//         if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//             a != '' && b != '' && a.length < 50) {
//             appData.expenses[a] = b;
//         } else {
//             i = i - 1;
//         }
//     }
// }
// chooseExpenses();
// appData.PerDayMoney = (appData.budget / 30).toFixed();
// alert(appData.PerDayMoney);

// if (appData.PerDayMoney < 100) {
//     console.log("LOL");
// } else if (appData.PerDayMoney > 100 && appData.PerDayMoney < 2000) {
//     console.log("KEK");
// } else if (appData.PerDayMoney > 2000) {
//     console.log("Cheburek");
// } else {
//     console.log("Not cool")
// }
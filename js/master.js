'use strict';


let money = prompt("Ваш бюджет а месяц", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    },
    question1 = prompt("Введите обязательную статью расходов в этом месяце",""),
    question2 = prompt("Во сколько обойдется?", ""),
    question3 = prompt("Введите обязательную статью расходов в этом месяце",""),
    question4 = prompt("Во сколько обойдется?", "");
appData.expenses[question1] = question2;
appData.expenses[question3] = question4;

alert('Бюджет на 1 день ' + appData.budget / 30);
// console.log(appData.expenses);
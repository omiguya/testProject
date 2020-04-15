'use strict';

let money = +prompt("Ваш бюджет а месяц", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };
    

// First example
for( let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце",""),
        b = prompt("Во сколько обойдется?", "");
    
    if( typeof(a) === 'string' && typeof(a,b) != null && a != '' && b != '' && a.length < 50 ){
        console.log('done');
        appData.expenses[a] = b;
    } else {
        console.log(i);
        i--;
    }
}


// Second example
// let i = 0;
// while( i < 2 ) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце",""),
//         b = prompt("Во сколько обойдется?", "");
    
//     if( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50 ){
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         console.log('error');
//     }
//     i++;
// }


// Third example
// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце",""),
//         b = prompt("Во сколько обойдется?", "");
    
//     if( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50 ){
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {

//     }
//     i++;
// }
// while ( i < 2);

appData.moneyPerDay = appData.budget / 30;

alert('Бюджет на 1 день ' + appData.moneyPerDay);

if( appData.moneyPerDay < 100 ) {
    console.log('Минимальный уровень дохода');
} else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
    console.log('Средний уровень дохода');
} else if ( appData.moneyPerDay > 2000 ) {
    console.log('Высокий уровень дохода');
} else {
    console.log('error');
}
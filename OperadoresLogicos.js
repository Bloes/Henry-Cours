function mayorYmenor(num){
    if (num > 5 && num < 10)console.log(true);
    else console.log(false);
}

mayorYmenor(2);
mayorYmenor(7);

function mayorYmenorYpar(num){
    if (num > 5 && num < 10 && num % 2===0)console.log(true);
    else console.log(false);
}

mayorYmenorYpar(8);
mayorYmenorYpar(3);
//*-----------------------------------------------------//*

function operadorOr(str){
    if (str === 'Henry' || str.length<2)console.log(true);
    else console.log(false);
}

operadorOr('H');
//*----------------------------------------------------//*

function condicionCompleja(num){
    if (num > 9 && num % 2 === 0 || num ===3)console.log(true);
    else console.log(false);
}

condicionCompleja(10);
condicionCompleja(5);
condicionCompleja(3);

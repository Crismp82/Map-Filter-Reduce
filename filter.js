function fp( par){
    return par.filter(calback);
}

function calback(item){
    return item % 2 === 0;
}


function calback(item){
    return item % 2 !== 0;
}


const mpares = [ 3,9,67,59,77,8,97,79,60];

console.log(' meus números pares são: ', fp(mpares));

console.log(' meus números ímpares são: ', fp(mpares));

const lista = [
    { produto: 'sabao', preco: 18.99},
    { produto: 'papel higienico', preco: 12.99},
    { produto: 'acucar', preco: 2.99 },
    { produto: 'arroz', preco : 19.99 },
    { produto: 'feijao', preco : 3.99 },
]
const saldo= 100;

function saldoF(saldo, lista) {
    return lista.reduce(function(prev,current) {
        //*console.log({prev});//
        //console.log({current});//
        return prev - current.preco;

    }, saldo)
}
console.log('Saldo final = ',saldoF(saldo,lista));

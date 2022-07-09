const banana = {

    valor: 4.99,

};

const abacaxi = {

    valor: 6.99,

};

function mapthis(valor, thisarg){

    return valor.map(function(item){

        return item * this.valor;

    }, thisarg);

}

const kg = [1, 2];



console.log('valor da banana', mapthis(kg, banana));

console.log('valor do abacaxi', mapthis(kg,abacaxi))
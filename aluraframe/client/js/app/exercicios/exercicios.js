let numeros = [3,2,11,20,8,7];
let novosNumeros = [];

numeros.forEach(item => {
    if(item % 2 != 0) {
        novosNumeros.push(item * 2);
    } else {
        novosNumeros.push(item);
    }
});

let numeros = [3,2,11,20,8,7];
// como 0 sempre é falso no js o numero não será multiplicado por 2, a não ser que o resto da divisão seja maior que 0 :D
let novosNumeros = numeros.map(item =>  item % 2 ? item * 2 : item);
console.log(novosNumeros);

var aprovados = avaliacoes
    .filter(function(prova) { return prova.nota >= 7; })
    .map(function(prova) { return prova.aluno.nome;});

console.log(aprovados);


var aprovador = avaliacoes.filter(prova => prova.note >= 7).map(prova => prova.aluno.nome);


// concatenando duas listas, porém criando uma nova, e não alterando as que já existem

let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
listanova = [].concat(listaDeNomes1, listaDeNomes2);

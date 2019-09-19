let funcionario = {email: 'abc@abc.com'};

let funcionarioProxy = new Proxy(funcionario,  {

    get(target, prop, receiver) {
        console.log('Armadilha aqui!');
        return Reflect.get(target, prop, receiver);
        //se retornado no método abaixo então retorna o valor diretamente e não a função
        //return target[prop];
    }

});
console.log(funcionarioProxy.email);


let Aluno = {
    nome: "Thiago Bussola",
    email: "thiagobussola@hotmail.com"
}

let alunoProxy = new Proxy(Aluno, {

    get(target, prop, receiver) {
        console.log(`interceptando os dados de ${target.nome}`);
        return Reflect.get(target, prop, receiver);
    }
    
})
console.log(alunoProxy.nome + " Testando o email : " + alunoProxy.email);


let funcionario = {
    email: 'abc@abc.com'
}

let funcionarioProxy = new funcionario (funcionario, {
    get(target, prop, receiver) {
        console.log('armadilha aqui');
        return '**' + Reflect.get(target, prop, receiver) + '**' ;
    }
})

console.log(funcionarioProxy.email);


class Funcionario {

    constructor(email) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }
}


let funcionario = new Proxy(new Funcionario('abc@abc.com'), {

    get(target, prop, receiver) {
        console.log('Armadilha aqui!');
        console.log(prop);
        return Reflect.get(target, prop, receiver);
    }

});

console.log(funcionario.email);


// Crie um proxy que exibe no console o valor da propriedade antes dela ser alterada e o valor novo.


let funcionario = {email: 'abc@abc.com'};
let funcionarioProxy = new Proxy(funcionario,  {

    set(target, prop, value, receiver) {
        console.log(`Valor antigo ${target[prop]}, valor atual: ${value}`);
        return Reflect.set(target, prop, value, receiver);
    }

});
funcionarioProxy.email = 'aaa@aaa.com';

// Crie um proxy que exiba no console o valor da propriedade antes de ela ser alterada e o valor novo. 
//Inclusive, exiba também o nome da propriedade que está sendo modificada.

let funcionario= new Proxy(new Funcionario('abc@abc.com'),  {

    set(target, prop, value, receiver) {
        console.log(prop); // imprimindo a propriedade que está sendo alterada
        console.log(`Valor antigo ${target[prop]}, valor atual: ${value}`);
        return Reflect.set(target, prop, value, receiver);
    }
});

funcionario.email = 'aaa@aaa.com';
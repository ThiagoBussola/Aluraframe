class ListaNegociacoes {
    
    constructor() {
       this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {

        //devolvendo para o usuario uma copia da lista de negociacoes
        return [].concat(this._negociacoes);
    }
}
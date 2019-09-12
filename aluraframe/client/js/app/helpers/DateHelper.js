class DateHelper {
    
    constructor() {
        throw new Error('DateHelper não pode ser instanciada');
    }

    static dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static textoParaData(texto) {
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
            throw new Error('Deve estar no formado aaaa-mm-dd');
        }

        // a operação de item - indece % 2 serve para sempre realizarmos ela com o segundo item do array
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
}
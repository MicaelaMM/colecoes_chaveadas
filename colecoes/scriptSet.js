const meuArray = [30, 30, 40, 5, 223, 2049, 3032, 5];//meuArray é apenas uma variável

function valoresUnicos(Array){ //Cria função para valores unicos tipo Array
    const mySet = new Set (Array); //Cria o mySet Array

    console.log(mySet); //Imprime o Set do Array existente
    //return mySet; // Retorna valor do mySet //Neste caso só está retornando Set dentro do Array existente
    return [...mySet];// os três pontos é o argumento Spreed e a cada novo elemento vazio do array vai adicionar o set
}
console.log(meuArray); //Imprime o Array definido antes de executar a função
console.log(valoresUnicos(meuArray)); //Executa metodo de valores unicos

//console.log(mySet); Neste caso o console apresenta um erro porque só é possível executar uma variável local dentro da função!
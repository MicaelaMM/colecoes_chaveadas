const meuArray = [30, 30, 40, 5, 223, 2049, 3032, 5];

function valoresUnicos(Array){ //Cria função para valores unicos tipo Array
    const mySet = new Set (Array); //Cria o mySet Array

    //return mySet; // Retorna valor do mySet //Neste caso só está retornando Set dentro do Array existente
    return [...mySet];// os três pontos é o argumento Spreed e a cada novo elemento vazio do array vai adicionar o set
}

console.log(valoresUnicos(meuArray)); //Executa programa Array Set
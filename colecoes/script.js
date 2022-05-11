function getAdmins (map){//Adiciona a função Map

    let admins = []; //Array auxiliar admins
    for([key,value] of map){ //Criando um laço for of de entrada de cada valor do map
        if (value === 'Admin'){ // Se valor for igual a Admin
            admins.push(key); //Retorna o nome da pessoa Admin
        }
    }
    return admins; //Senão retorna ao Array admins
}

const usuario = new Map();// Cria um Map para retornar os usuários

usuario.set('Antonio', 'Admin');
usuario.set('Micaela', 'Admin');
usuario.set('Carlos', 'Admin');
usuario.set('Laura', 'User');

console.log(getAdmins(usuario)); //Executa o log Admins com resultado da busca. Map usuario
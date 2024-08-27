//let nome = prompt('qual é o seu nome?')
//let corFav = prompt('qual sua cor favorita?')
//console.log('a cor favorida de ' + nome + ' é ' + corFav)
//console.log(`a cor favirita de ${nome} é ${corFav}`)

//let numeros = [1,2,3,4,5,6]
//numeros.lenght
//console.log(numeros)
//numeros.push("7")
//console.log(numeros)
//numeros.splice(3,2)
//console.log(numeros)

//let nome = prompt('Qual seu nome?')
//let email = prompt('qual seu email?')
//console.log(`O e-mail ${email} foi cadastrado com sucesso.Seja bem-vindo(a),${nome}`)

//let comidas = ['Lasanha','pizza','frango','pizza de sardimha','xis']
//console.log(comidas)
//console.log('essas são as minhas comidas preferidas:')
//console.log(comidas[0])
//console.log(comidas[1])
//console.log(comidas[2])
//console.log(comidas[3])
//console.log(comidas[4])
//let usuarioComida = prompt('fale uma das suas comidas preferidas')
//comidas[1] = usuarioComida
//console.log('a nova lista é:')
//console.log(comidas)

//let arreyTarefas = []
//let listaDeTarefas = arreyTarefas
//let tarefa1 = prompt('me fale uma tarefa sua')
//let tarefa2 = prompt('me fale uma segunda tarefa sua')
//let tarefa3 = prompt('uma terceira...')
//arreyTarefas[0] = tarefa1
//arreyTarefas[1] = tarefa2
//arreyTarefas[2] = tarefa3
//console.log(listaDeTarefas)
//let concluida = prompt('me fale o indice da tarefa que vc completou')
//arreyTarefas.splice(concluida)
//console.log(listaDeTarefas)

//function imprimirOlaMundo() {
//console.log('ola mundo')
//}
//imprimirOlaMundo()

//function olaNome(nome1,nome2,nome3) {
//    console.log(`ola ${nome1}`)
//    console.log(`ola ${nome2}`)
//    console.log(`ola ${nome3}`)
//}

//olaNome()

//function soma(numero1 , numero2) {
//    return numero1 + numero2
//}
//let sla = soma(8,13)
//console.log(sla)

//let filme = {
//    nome: 'A voz do silencio:Koe no Katachi',
//    anoLancamento: '2016',
//    diretora: 'Naoko Yamada',
//    autora:'Yoshitoki Ōima' ,
//   elenco: ['Yoshitaka Yamaya','Saori Hayami',' Aoi Yuki'] ,
//    visto: false
//}
//console.log(filme.nome)

//let pessoa = {
//    nome:'John',
//    idade: '15',
//    genero:'masculino',
//    generoMusicalFavorito: 'geek',
//}
//console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusicalFavorito}`)
//filme.personagens = ['Shouya Ishida','Shouko Nishimiya','Yuzuru Nishimiya']
//console.log(`${filme.elenco[0]} fez ${filme.personagens[0]},a ${filme.elenco[1]} fez ${filme.personagens[1]},ja a ${filme.elenco[2]} fez a ${filme.personagens[2]}`)
//filme.elenco[0] = 'xuxa'
//console.log(`nome do filme é:${filme.nome} e foi lançado em ${filme.anoLancamento} a direção é a ${filme.diretora} e a autora é ${filme.autora} e o elenco é:${filme.elenco}.se eu ja olhei?${filme.visto}`)

//let k = Number(prompt('insira um numero'))
//let j = Number(prompt('insira um numero'))


//function compararNumeros(num1,num2) {
//    if(num1 === num2) {
//        console.log('são iguais')
//    } else if(num1 > num2) {
//        console.log('o primeiro número é maior que o segundo')
//    } else {
//        console.log('o primeiro número é menor que o segundo')
//    }
//}

//compararNumeros(k,j)

//let pokemonInicial = prompt('escolha um pokemon inicial:charmander,bulbasauro ou squirtle')

//switch (pokemonInicial) {
//    case 'charmander':
//        console.log('Você escolheu tipo fogo')
//        break;
//    case 'bulbasauro':
//        console.log('você escolheu tipo planta e venenoso')
//        break;
//    case 'squirtle':
//        console.log('você escolheu tipo agua')
//        break
//
//    default:
//        console.log('você não escolheu um pokemon')
//        break;
//}
//let idade = Number(prompt('insira sua idade'))
//let ensinoMedio = prompt('você completou o ensino medio?sim ou não.')
//let outraFaculdade = prompt('você ta cursando outra faculdade?sim ou não.')

//function podeEstudar(idade,ensinoMedio,outraFaculdade) {
//    if (idade >= 18 && ensinoMedio === 'sim' && outraFaculdade === 'não'){
//        console.log('você pode estudar na faculdade')                                                                                                                                                                                   
//    }
//    else {
//        console.log('você não pode estudar na faculdade')
//    }
//}
//podeEstudar(idade,ensinoMedio,outraFaculdade)

//let numero = Number(prompt('insira um numero'))
//let numero8

//while (numero === 0) {
//console.log(numero8)
//}






let listaDeAbrigos = []
let menu = prompt(
    "===ABRIGOS TEMPORÁRIOS=== \n 1.Cadastrar abrigo \n 2.listar abrigos \n 3.procurar abrigo \n 4.saiir\n Escolha uma opção:"
)
switch (menu) {
    case '1':
        cadastrandoAbrigos
        break;
    case '2':

}

function cadastrandoAbrigos(){
    let cadastroAbrigo = {
    nome: prompt('insira o nome do abrigo'),
    endereco: prompt('insira o endereço do abrigo'),
    telefone: prompt('insira o número de telefone do abrigo'),
    capacidadeDeLtacao: prompt('Qual é a capacidade de lotação do abrigo'),
    }
}
listaDeAbrigos.push(cadastroAbrigo)

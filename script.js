
let arrayObject = {

    // Array with every starter phrase
    startingPhrases: [
        "Um vendedor de uma cidade vizinha precisa ",
        "Uma bruxa precisa ",
        "Uma criança de rua pediu ",
        "Um rato comentou sobre ",
        "Um corvo trouxe uma mensagem que pedia ",
        "Um cavaleiro exausto pediu abrigo e pediu ",
        "Um espírito apareceu na lareira pedindo ",
        "Um druida das florestas distantes precisa ",
        "Um ladrão deixou um bilhete dizendo o rei do crime quer ",
        "Uma fada apareceu dizendo precisar de ",
        "Um mago errante perdeu ",
        "Uma sombra se aproximou murmurando que necessita de",
        "Um goblin ofereceu uma troca estranha por ",
        "Um velho alquimista precisa de "
    ],

    // Array with every item needed
    itemsNeeded : [
        "um cálice das luas gêmeas ",
        "um anel de cinzas eternas ",
        "um grimório sussurrante ",
        "um manto de névoa viva ",
        "um cristal do sangue antigo ",
        "um colar de lágrimas petrificadas ",
        "um espelho de marfim partido ",
        "um cajado das marés silenciosas ",
        "um broche em forma de corvo adormecido ",
        "um pergaminho que reescreve o próprio texto ",
        "um sinete do juramento quebrado ",
        "um punhal de vidro encantado ",
        "um sino que só toca para os mortos ",
        "um livro de sombras famintas ",
        "um amuleto de raízes pulsantes ",
        "um elmo que sonha com batalhas passadas ",
        "um medalhão de fogo congelado ",
        "um lampião que queima sem chama ",
        "um anel feito de fios de luar ",
        "um frasco que aprisiona suspiros "
    ],

    // Array with every reason to need that item.
    reasonToNeedThatItem: [
        "para quebrar uma maldição ancestral",
        "para invocar o nome verdadeiro de um espírito",
        "para selar um pacto antes do nascer do sol",
        "para curar uma ferida que não sangra",
        "para encontrar alguém que nunca existiu",
        "para fazer o tempo parar por um instante",
        "para ouvir os mortos sem que eles percebam",
        "para atravessar um espelho sem deixar reflexo",
        "para apagar um nome da história",
        "para provar a inocência de um rei envenenado",
        "para iluminar um caminho que não está lá",
        "para libertar uma alma presa em um objeto",
        "para enganar a própria sombra",
        "para que o coração de pedra volte a bater",
        "para impedir o renascimento de um deus esquecido",
        "para caminhar entre os sonhos alheios",
        "para acalmar uma tempestade que tem voz",
        "para convencer o ferro a se dobrar",
        "para lembrar algo que foi apagado da mente",
        "para pagar uma dívida com a Morte"
    ],
}
const randomPhraseGenerator = () => {

    let startingNumber = Math.floor(Math.random()* arrayObject.startingPhrases.length) ;
    let itemNumber = Math.floor(Math.random() * arrayObject.itemsNeeded.length);
    let reasonNumber = Math.floor(Math.random()* arrayObject.reasonToNeedThatItem.length);

    console.log(arrayObject.startingPhrases[startingNumber] + arrayObject.itemsNeeded[itemNumber] + arrayObject.reasonToNeedThatItem[reasonNumber]); 

}

randomPhraseGenerator()
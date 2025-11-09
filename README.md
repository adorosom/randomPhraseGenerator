# randomPhraseGenerator

![dice](https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUya3RmOTE0cDYybWJ6ejA4ejh6c2N6MTFiZXE3ZGwwOTV0ZWFiN29wayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Jx4FGR7aGH7OyRCAZr/giphy.gif)

### Um gerador simples de frases aleatórias pra começar alguma mini aventura medieval!

## 👁️ Visão geral

Este gerador permite que você gere frases aleatórias com um personagem (**NPC**) que entregue a aventura, um item que deva ser encontrado e o objetivo final desse personagem com o item! Este gerador utiliza apenas javascript, usando o arquivo 'script.js', sem dependências externas. 

## ⛏️ Funcionalidades

- Gera uma nova frase a cada execução com a função 'randomPhraseMaker'.
- Código puramente JavaScript, sem nenhum framework.
- Fácil de se personalizar, você pode editar as frases à seu gosto ou mudar a lógica de seleção.

## ⬇️ Instalação e Uso

1. Clone o repo.
2. Execute em seu editor de código. Eu utilizei o VSCode.
3. Personalize! (opcional):
  - Você pode também trocar as entradas dentro do objeto para personalizar as formas nas quais as frases são geradas.
  - Você pode também trocar a lógica de geração de frases pra melhor se adaptar ao que você precisa.

## 🔧 Como Funciona

Dentro de 'script.js' existe um objeto com vários arrays de frases (startingPhrases, itemsNeeded, reasonToNeedThatItem). Cada um desses arrays é iterado em cada uma das execuções da função randomPhraseGenerator, logando no console uma frase que pode ser utilizada como gancho de uma mini aventura de RPG medieval. Divirta-se usando o gerador!

## 🤝 Contribuindo

Pull requests são bem-vindas! Se encontrar bugs ou tiver ideias de melhorias, abra uma issue ou PR. Por favor, siga estas orientações:

- Fork o repositório e crie uma branch: feat/minha-melhoria ou fix/bug-'x'.
- Escreva um commit claro explicando a mudança.

Garanta que o projeto ainda funcione localmente após sua modificação.

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Sinta-se livre para usar, modificar ou distribuir conforme suas necessidades.

### Valeu por visitar! Se usar o gerador em algo bacana me avisa! Eu adoraria ver! 🖤
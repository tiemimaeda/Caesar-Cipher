# << Hidden Notes >>

## Sobre a página

A ideia de "Hidden Notes" é que o usuário possa fazer anotações como em um bloco de notas.
É comum termos anotado lembretes, endereços e senhas, mas ninguém gosta de alguém 'fuçando' nossas coisas, não é mesmo?!

A aplicação permite transformar as anotações em códigos. Somente quem possuir a chave consegue ler as anotações. 

O projeto foi baseado na Cifra de César.


## O que é a Cifra de César?

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é uma das técnicas mais simples de cifrar uma mensagem e é um dos primeiros tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de batalha.

É um tipo de cifra por substituição, em que cada letra do texto original é substituida por outra que se encontra há um número fixo de posições (deslocamento) mais a frente do mesmo alfabeto.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)


## O Projeto

### Definição do produto

A interface permite ao usuário:

* Eleger um _offset_ indicando quantas posições de deslocamento de caracteres  quer que a cifra utilize.
* Inserir uma mensagem (texto) para ser cifrada ou decifrada.
* Ver o resultado da mensagem cifrada ou decifrada.

### Scripts / Arquivos

* `HTML:` aqui será o ponto de entrada da sua aplicação. Este arquivo
  deve conter a marcação HTML e chamar o CSS e JavaScript necessários.

* `HTML:`

* `HTML:`

* `HTML:`

* `README.md`: deve explicar como "deployar", instalar e executar a aplicação,
  assim como uma introdução a aplicação, suas funcionalidades e as decisões que
  foram tomadas.
* `src/cipher.js`: aqui você deve implementar o objeto cipher, o qual deve estar  _exportado_ no objeto global (`window`). Este objeto (`cipher`) deve conter
  dois métodos:
  - `cipher.encode(offset, string)`: `offset` é o número de posições que
      queremos mover para a direita no alfabeto e `string` é a mensagem (texto)
      que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` é o número de posições que queremos mover para a esquerda no alfabeto e `string` é a mensagem (texto)
      que queremos decifrar.
* `src/index.js`: aqui você deve escutar os eventos de DOM, chamar
  `cipher.encode()` e `cipher.decode()`.
 

![Tela inicial](src/Imagens/Tela-hidden-notes.jpg)
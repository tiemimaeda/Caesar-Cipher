# << Hidden Notes >>

## 1. Prefácio

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um tipo de cifra por substituição, em que cada letra do texto original é substituida por outra que se encontra há um número fixo de posições (deslocamento) mais a frente do mesmo alfabeto.


## 2. Resumo do projeto

O projeto 

## 3. Objetivos de aprendizagem




### Definição do produto

No README.md, escreva como você definiu seu usuário e qual foi o processo para
definir o produto final a nível de expriência e interface.

* Quem são os principais usuário do produto?
* Quais são os objetivos do usuário em relação com o produto?
* Como você acredita que o produto está resolvendo os problemas do usuário?

### Interface do usuário (UI)

A interface deve permitir ao usuário:

* Eleger um _offset_ indicando quantas posições de deslocamento de caracteres
  quer que a cifra utilize.
* Inserir uma mensagem (texto) para ser cifrada.
* Ver o resultado da mensagem cifrada.
* Inserir uma mensagem (texto) para ser decifrada.
* Ver o resultado da mensagem decifrada.

### Scripts / Arquivos

* `README.md`: deve explicar como "deployar", instalar e executar a aplicação,
  assim como uma introdução a aplicação, suas funcionalidades e as decisões que
  foram tomadas.
* `src/index.html`: aqui será o ponto de entrada da sua aplicação. Este arquivo
  deve conter a marcação HTML e chamar o CSS e JavaScript necessários.
* `src/cipher.js`: aqui você deve implementar o objeto cipher, o qual deve estar
  _exportado_ no objeto global (`window`). Este objeto (`cipher`) deve conter
  dois métodos:
  - `cipher.encode(offset, string)`: `offset` é o número de posições que
      queremos mover para a direita no alfabeto e `string` é a mensagem (texto)
      que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` é o número de posições que
      queremos mover para a esquerda no alfabeto e `string` é a mensagem (texto)
      que queremos decifrar.
* `src/index.js`: aqui você deve escutar os eventos de DOM, chamar
  `cipher.encode()` e `cipher.decode()`.
* `test/cipher.spec.js`: este arquivo contem alguns testes de exemplo e aqui
  você deve implementar os testes para `cipher.encode()` e `cipher.decode()`.
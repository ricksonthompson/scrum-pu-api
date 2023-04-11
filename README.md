
# API REST SCRUM-PU-API 
A seguir vamos realizar os passos para rodar o projeto localmente.

## Instalação 
Baixe as dependências do projeto. Pode ser com NPM ou Yarn. No caso, será usado YARN.

```bash
yarn
```

## Configurar o arquivo `.env`
Todas as configurações do projeto ficam em um arquivo chamado `.env`. 
Ele deve ser criado a partir do arquivo `.env.example` que contém
todas as configurações que precisamos preencher antes de 
rodar a aplicação. A estrutura dele é assim:

```javascript
# Application
PORT = <porta>

# Trello Integration
TRELLO_API_URL = <url da api>
KEY_TRELLO_API = <chave de api>
TOKEN_TRELLO_API = <token de api>
``` 
Clone o arquivo de exemplo para poder alterá-lo e configurá-lo. Use o nome do arquivo como `.env`

## Definir a porta onde vai ser executada a API
Qualquer porta que estiver disponível em sua máquina pode
ser utilizada. Por convenção, geralmente utilizamos a porta `3333`.

Acesse o arquivo `.env` e defina:
```
# Application
PORT=<sua porta disponível>
```

## Executar a aplicação
Use o comando para rodar o projeto:
```bash
yarn start:dev
```
Após executar o comando ele deve retornar no console:

```bash
yarn run v1.22.19
$ nodemon src/index.js
[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/index.js`
🚀power-up running on port 3333...
```

## Conclusão
Até aqui já está com tudo pronto para desenvolver e utilizar
a API.

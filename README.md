# Telegram Bot

<p align="center">
	<img src="https://i.imgur.com/5V1EJCb.png" alt="Jim Hawkins" title="Jim Hawkins">
</p>

## Sobre

Projeto desenvolvido pela necessidade pessoal de automatizar o processo de conferir a cotação de determinadas ações da bolsa brasileira e moedas de hora em hora de forma automática. A API utilizada é a de finanças **[brapi](https://brapi.dev/)**. O bot recebe o nome de **Jim Hawkins**, inspirado no personagem da animação **[Treasure Planet](https://en.wikipedia.org/wiki/Treasure_Planet)**.

---

## 🛠️ Tecnologias utilizadas

Esta aplicação usa as seguintes tecnologias:

- **[Axios](https://axios-http.com/ptbr/)** - biblioteca JavaScript amplamente utilizada para fazer requisições HTTP.
- **[Node.JS](https://nodejs.org/en)** - ambiente de tempo de execução JavaScript.
- **[Node Telegram Bot API](https://github.com/yagop/node-telegram-bot-api/)** - módulo Node.js para interagir com a API oficial do Telegram Bot.
- **[dotenv](https://www.npmjs.com/package/dotenv)** - módulo de dependência zero que carrega variáveis de ambiente de um arquivo .env para process.env.

## 🔧 Instalação

Para instalar esta aplicação em sua máquina local, siga estas etapas:

1. Clone este repositório em sua máquina local.
2. Navegue até o diretório da aplicação no terminal.
3. Execute o comando `npm install` ou `yarn` para instalar as dependências necessárias.
4. Crie um arquivo `.env` e adicione a chave API_TOKEN com respectivo token do seu bot.

```
API_TOKEN=TOKEN_DO_SEU_BOT
```

5. Execute o comando `npm/yarn start` para iniciar o servidor local.
6. Interaja com o seu bot no Telegram para iniciá-lo e começar a receber mensagens.

## 🤝 Contribuindo

Se você deseja contribuir para este projeto, sinta-se à vontade para enviar um pull request. Antes de enviar um pull request, certifique-se de seguir estas etapas:

1. Crie um fork deste repositório.
2. Crie um branch para sua nova funcionalidade (`git checkout -b my-new-feature`).
3. Faça as alterações necessárias.
4. Commit suas alterações (`git commit -am 'Add some feature'`).
5. Envie para o branch (`git push origin my-new-feature`).
6. Crie um novo pull request.

## 📝 Licença

Esta aplicação está licenciada sob a licença [MIT](https://choosealicense.com/licenses/mit/). Consulte o arquivo LICENSE para obter mais informações.

---

**Desenvolvido com ❤ por [Samuel Gomes](https://github.com/Saesel/).**

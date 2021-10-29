import TelegramBot from "node-telegram-bot-api";
import fetch from "node-fetch";
import { coins } from "./coins.js";
const token = `2059083281:AAGhO065zJYhzilV16m9V8y3NOJEyunRiIY`;
const bot = new TelegramBot(token, { polling: true });
const date = new Date();

bot.on("message", (message) => {
  const chatId = message.chat.id;
  const msg = message.text.slice(1);
  const requestOptions = {
    method: "GET",
    redirect: "follow",
    Authorization: `Bearer ${"539fb593-48e2-46fe-939f-1e80fede8275"}`,
  };

  if (message.text.startsWith("/")) {
    switch (true) {
      case msg.includes("dolar"):
        async function fetchApiDolar() {
          const url = `https://economia.awesomeapi.com.br/last/USD-BRL`;
          const response = await fetch(url, requestOptions).then((res) =>
            res.json()
          );
          const { ask } = response.USDBRL;
          const price = Number(ask);

          bot.sendMessage(
            chatId,
            `A atual cotação do dólar para real brasileiro é de R$ ${price.toFixed(
              2
            )}`
          );
        }
        fetchApiDolar();
        break;
      case coins.includes(msg):
        async function fetchApiCripto() {
          try {
            const url = `https://api.coincap.io/v2/assets/${message.text}`;
            const response = await fetch(url, requestOptions).then((res) =>
              res.json()
            );
            const { symbol, name, priceUsd } = response.data;
            const price = Number(priceUsd);

            bot.sendMessage(
              chatId,
              `O atual preço da criptomoeda ${name} (${symbol}) é de U$ ${price.toFixed(
                2
              )}.`
            );
          } catch {
            bot.sendMessage(
              chatId,
              "Não foi possível conectar com a API no momento. Tente novamente em 1 minuto."
            );
          }
        }
        fetchApiCripto();
        break;
      default:
        bot.sendMessage(chatId, "Nenhum comando válido foi inserido.");
        break;
    }
  }
  console.log(
    `Comando ${message.text} utilizado por ${message.chat.first_name} ${
      message.chat.last_name
    } (${message.chat.username}) às ${date.getHours()}:${date.getMinutes()}.`
  );
});

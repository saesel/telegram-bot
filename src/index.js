import axios from 'axios';
import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';
import getCurrency from './services/getCurrency.js';

dotenv.config();

const token = process.env.API_TOKEN;

if (!token) {
  console.error('O token do bot não foi definido corretamente.');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

async function handleMessage(message) {
  try {
    await bot.sendMessage(
      message.chat.id,
      `Olá *${message.from.first_name}*! 👋\n\nA partir de agora, a cada hora das *10h00* às *18h00*, você receberá atualizações sobre o mercado financeiro.
    `,
      {
        parse_mode: 'Markdown',
      },
    );

    const interval = 1000 * 60 * 60;
    const time = new Date().getHours();

    console.log(time);

    if (time >= 1 && time <= 18) {
      setInterval(async () => {
        const tickers = ['ITSA4', 'BBSE3', 'AESB3', 'KNCR11', 'NUBR33'];
        const url = `https://brapi.dev/api/quote/${tickers.join(',')}`;

        try {
          const { data } = await axios.get(url);
          const { results } = data;

          const botMessage = results
            .map((result) => {
              const { symbol, regularMarketPrice, regularMarketChangePercent } =
                result;

              return `*${symbol}* — R$ ${regularMarketPrice} (${regularMarketChangePercent.toFixed(
                2,
              )}%) ${regularMarketChangePercent > 0 ? '📈' : '📉'}`;
            })
            .join('\n\n');

          await bot.sendMessage(message.chat.id, botMessage, {
            parse_mode: 'Markdown',
          });

          const currency = parseFloat(await getCurrency());

          await bot.sendMessage(
            message.chat.id,
            `1 *Dólar americano* igual a R$ ${currency.toFixed(2)}`,
            {
              parse_mode: 'Markdown',
            },
          );
        } catch (error) {
          console.error(error);
          await bot.sendMessage(
            message.chat.id,
            `Opa! Parece que algo deu errado ao tentar buscar alguma informação. Lamento. 😕`,
          );
        }
      }, interval);
    }
  } catch (error) {
    console.error(error);
    throw new Error('Opa! Parece que algo deu errado com a API.');
  }
}

bot.on('message', handleMessage);

bot.on('polling_error', (error) => {
  console.error(error);
  throw new Error('Opa! Parece que algo deu errado com o bot.');
});

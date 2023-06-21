import axios from 'axios';

export default async function getCurrency() {
  const url = `https://brapi.dev/api/v2/currency`;

  const { data } = await axios.get(url, {
    params: {
      currency: 'USD-BRL',
    },
  });

  const response = data.currency[0].bidPrice;

  return response;
}

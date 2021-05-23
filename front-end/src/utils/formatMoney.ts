/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
export const formatMoney = (money: number): string =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(money);

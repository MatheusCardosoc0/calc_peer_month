export interface initialInformationsProps {
  title: string;
  about: string;
  illustration: string;
}

export const initialInformations: initialInformationsProps[] = [
  {
    title: "Seja bem vindo a $imulaMoney",
    about:
      "Esta é uma aplicação web feita para auxilia lo com as despesas financeiras",
    illustration: "/images/money.png",
  },
  {
    title: "Há diversas funções",
    about:
      "Aqui você encontrará funções, como simulação de gasto com produtos, simulação de troca de produtos, calculo de gastos mensais, etc.",
    illustration: "/images/piggybank.png",
  },
  {
    title: "Por fim",
    about:
      "Clique em (entendido) e inicie sua nova jornada para ter um controle maior de seus gastos e ganhos.",
    illustration: "/images/coin.png",
  },
];

<template>
  <div>
    <h2 class="text-2xl">Os Meses</h2>

    <p>
      Os nomes dos meses são inspirados em elementos naturais, buscando um
      caráter mais universal ao calendário, e são ordenados de maneira
      alfabética, trazendo mais sinergia e facilidade de assimilação. Um ano
      Dekatrian começa no mês de Auróran (a aurora, o nascer do Sol, o início de
      um ciclo) e termina no mês de Níxian (a noite, o pôr do Sol, o fim do
      ciclo). Ao total são 13 meses iniciados em A, B, C, D, ... L, M e N,
      seguidos de um dia especial que não faz parte de nenhum mês, o Acrônian,
      cuja função é sincronizar o calendário ao ciclo solar.
    </p>

    <dl v-for="month in months" :key="month.name">
      <dt class="font-bold mt-5">{{ month.name }}</dt>
      <dd>{{ month.description }}</dd>
    </dl>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MonthsTemplate',
  data: () => ({
    months: [
      {
        name: 'Auróran',
        description:
          'A aurora, o nascer do Sol, o início de um dia, o começo de um ciclo. [Sol, nascimento, início, luz]',
      },
      {
        name: 'Bórean',
        description:
          'Vem do grego Βορέας (Boréas), o vento do norte, portador do ar frio invernal. [vento, ar, pontos cardeais, frio]',
      },
      {
        name: 'Corônian',
        description:
          'Na mitologia grega, Corônis era uma das híades (ninfas) que traziam a chuva por meio do seu choro e se tornaram estrelas. Corônis também representa o animal corvo. [chuva, estrelas, lágrimas, fauna]',
      },
      {
        name: 'Dríadan',
        description:
          'As dríades, na mitologia grega, são as ninfas das árvores ou espíritos das árvores, seres muito reservados. [árvores, flora, natureza, introspecção]',
      },
      {
        name: 'Eléctran',
        description:
          'A energia elétrica, o relâmpago, a natureza em sua presença mais ofuscante. [relâmpago, energia, luz, força]',
      },
      {
        name: 'Fáian',
        description:
          'Vem do grego Φαινων (fainôn) que significa brilhante, além de ser um deus associado com o planeta Saturno. Também vem de Φαιω (faio), uma das ninfas das estrelas. [brilho, estrelas, planetas, astros]',
      },
      {
        name: 'Gáian',
        description:
          'Vem de Gaia, a mãe-terra, o planeta Terra, o solo, a provedora da vida. [terra, planeta Terra, fertilidade]',
      },
      {
        name: 'Hélian',
        description:
          'Vem do grego Ήλιος (hélios), o Sol, o astro central do Sistema Solar e principal fonte de luz e calor. [Sol, calor, fogo, luz]',
      },
      {
        name: 'Irísian',
        description:
          'Vem do grego Ίρις (íris), o arco-íris, as cores, os tons, a diversidade, a pluralidade. [Arco-íris, cores, diversidade]',
      },
      {
        name: 'Kaósian',
        description:
          'Vem do grego χάος (kháos), que significa vazio, vácuo, espaço, abismo. É o princípio do nada, a ausência de ordem, o caos. É também o infinito, a eternidade, o palco onde os fenômenos, e a própria existência, ocorre. [vazio, vácuo, espaço, infinito, caos]',
      },
      {
        name: 'Lúnan',
        description:
          'Relativo à Lua, o satélite natural que orbita a Terra, o corpo mais brilhante do céu noturno. [Lua, noite, brilho, sonhos]',
      },
      {
        name: 'Máian',
        description:
          'Na mitologia grega, Maia era uma das plêiades (ninfas que se transformaram em estrelas) e está associada à criação parental, ao cuidado, ao amor materno. [amor, cuidado, criação, estrelas]',
      },
      {
        name: 'Níxian',
        description:
          'Vem do grego Νύξ (níx) que significa noite, o fim do dia, o fim do ciclo. [noite, encerramento, escuridão]',
      },
    ],
  }),
};
</script>

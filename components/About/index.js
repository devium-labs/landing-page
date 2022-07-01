import React from "react";

export default function About() {
  return (
    <section
      className="tw-max-w-[1280px] tw-px-[20px] tw-bg-darkGray tw-text-white tw-my-[100px] tw-flex tw-flex-col tw-items-center"
      id="about"
    >
      <h1 className="title">Quem somos nós?</h1>
      <br />
      <div className="tw-w-full tw-max-w-[820px] p:tw-pb-[10px]">
        <p>
          Somos uma empresa nova no mercado, criada com o intuito de prestar
          soluções em tecnologia. Nossos serviços consistem principalmente no
          desenvolvimento e ajustes de sites
        </p>
        <p>
          Temos muito amor pela criação de sites e muito orgulho do que fazemos. Toda a estrutura é pensada de forma a obter o melhor resultado. Cada parte do processo é executada com muita atenção e cuidado, para evitar o maior número de erros possível e criar o melhor produto final.
        </p>
      </div>
    </section>
  );
}

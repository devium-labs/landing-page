import React, { useState, useEffect } from "react";

export default function Jobs() {
  const [numJobs, setNumJobs] = useState(2);

  function handleMoreJobs() {
    setNumJobs(numJobs + 2);
  }

  const jobs = [
    {
      titulo: "TopWay",
      descricao:
        "Neste projeto para a empresa Topway, que vende peças para caminhões, buscamos deixar o site o mais limpo e intuitivo possível, com a temáticas das cores da logo.",
      imagem: "/topway.svg",
      link: "topway.com",
    },
    {
      titulo: "Chacará Berté",
      descricao:
        "O projeto para a chácara, pensado com um estilo mais casual, para a divulgação de eventos e festas.",
      imagem: "/chacara.svg",
      link: "chacara.com",
    },
    {
      titulo: "Ibrás",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh justo, malesuada sit amet ultrices quis, faucibus in metus. Praesent tempor eros tellus, in iaculis dolor iaculis quis. ",
      imagem: "/ibras.svg",
      link: "ibras.com",
    },
    {
      titulo: "App Smartraining",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh justo, malesuada sit amet ultrices quis, faucibus in metus. Praesent tempor eros tellus, in iaculis dolor iaculis quis. ",
      imagem: "/app_smart.svg",
      link: "smartraining.com",
    },
  ];

  return (
    <section className="tw-w-full">
      <div className="tw-text-white tw-w-full tw-text-center">
        <h1 className="tw-text-6xl tw-mb-7">Nossos últimos projetos</h1>
      </div>
      {jobs
        .filter((item, index) => index < numJobs)
        .map((job, i) => (
          <div
            className={`tw-text-white tw-w-full tw-flex tw-items-center tw-justify-between ${
              i % 2 == 0 ? "tw-flex-row" : "tw-flex-row-reverse"
            }`}
            key={i}
          >
            <div className={`tw-w-2/4 `}>
              <img src={job.imagem} className="tw-w-full tw-object-cover" />
            </div>
            <div className="tw-text-white tw-w-2/4 tw-p-12 tw-flex tw-flex-col tw-items-end">
              <h1 className="tw-text-4xl tw-text-end">{job.titulo}</h1>
              <p className="tw-text-end tw-mt-5">{job.descricao}</p>
              <a
                href={job.link}
                target="_blank"
                className="tw-bg-purple tw-p-2 hover:tw-bg-white hover:tw-text-darkGray tw-mt-6"
              >
                SAIBA MAIS
              </a>
            </div>
          </div>
        ))}
      <div className="tw-w-full tw-flex tw-justify-center tw-mt-10">
        <button
          onClick={(e) => handleMoreJobs()}
          className="tw-text-white tw-bg-purple tw-p-2 hover:tw-bg-white hover:tw-text-darkGray"
        >
          Carregar mais trabalhos
        </button>
      </div>
    </section>
  );
}

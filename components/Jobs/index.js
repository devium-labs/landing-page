import React, { useState, useEffect } from "react";

export default function Jobs() {
  const [numJobs, setNumJobs] = useState(2);

  function handleMoreJobs(e) {
    if (numJobs + 2 >= jobs.length) e.target.classList.add("tw-hidden");
    setNumJobs(numJobs + 2);
  }

  useEffect(() => {
    if (numJobs >= jobs.length) {
      let button = document.getElementById("load-more-button");
      button.classList.add("tw-hidden")
    }
  }, [])

  const jobs = [
    {
      titulo: "Ibrás",
      descricao:
        "Site inteiramente criado visando a experiência do usuário e o desempenho. Um projeto grande incluindo muitas páginas e funcionalidades.",
      imagem: "/ibras.png",
      link: "https://ibras.com",
    },
    {
      titulo: "App Smartraining",
      // descricao:
      //   "Projeto desenvolvido como freelance, onde foi feito a adição de novas funcionalidades ao aplicativo existente, abrangendo os conhecimentos no desenvolvimento mobile.",
      descricao:
        "Nesse projeto adicionamos novas funcionalidades ao aplicativo já existente App Smartraining. O aplicativo existe tanto para celular como para desktop.",
      imagem: "/app.png",
      link: "https://app.smartraining.com.br/",
    },
    {
      titulo: "Ema Jr",
      descricao:
        "Projeto criado para empresa júnior de engenharia de materiais da UEPG.",
      imagem: "/emajr.png",
      link: "https://emajunior.com/",
    },
  ];

  return (
    <section className="tw-w-full tw-max-w-[1920px] tw-mx-auto" id="jobs">
      <div className="tw-text-white tw-w-full tw-text-center">
        <h1 className="title">Nossos últimos projetos</h1>
      </div>
      <div className="tw-py-[50px]">
        {jobs
          .filter((item, index) => index < numJobs)
          .map((job, i) => (
            <div
              className={`tw-text-white tw-w-full tw-flex tw-items-center tw-justify-between tw-flex-col-reverse ${
                i % 2 == 0 ? "md:tw-flex-row" : "md:tw-flex-row-reverse"
              }`}
              key={i}
            >
              <div className={`md:tw-w-2/4`}>
                <img src={job.imagem} className="tw-w-full tw-object-cover" />
              </div>
              <div className="md:tw-w-2/4 tw-text-white tw-px-[20px] tw-py-[50px] tw-flex tw-items-center tw-justify-center">
                <div className="tw-flex tw-flex-col tw-items-end tw-max-w-[400px] tw-w-full">
                  <h1 className={`tw-w-full tw-text-4xl tw-text-start`}>
                    {job.titulo}
                  </h1>
                  <p className="tw-text-start tw-mt-5">{job.descricao}</p>
                  <div className="tw-w-full tw-h-full tw-flex tw-pt-[20px]">
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noreferrer"
                      className="tw-text-[#7bcaec] tw-border-b-[3px] tw-border-[#7bcaec]"
                    >
                      Saiba mais
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div id="load-more-button" className="tw-w-full tw-flex tw-justify-center tw-mt-10">
        <button
          onClick={(e) => handleMoreJobs(e)}
          className="tw-cursor-pointer tw-font-bantayog tw-px-[10px] tw-text-white tw-ease-out tw-duration-100 tw-border-b-[3px] hover:tw-border-b-0 tw-h-[30px]"
        >
          CARREGAR MAIS
        </button>
      </div>
    </section>
  );
}

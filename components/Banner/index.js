import React from "react";

export default function Banner() {
  return (
    <section className="tw-w-full tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-items-center tw-max-w-[1920px] xl:tw-h-screen xl:tw-max-h-[1080px] tw-pt-[70px]">
      <div className="tw-py-[50px] lg:tw-py-0 tw-px-[20px] lg:tw-px-20 lg:tw-w-[40%]">
        <h1 className="tw-text-[42px] sm:tw-text-6xl tw-text-white tw-leading-[90%]">
          Explore <br/>novas ideias <br/>para seu negócio!
        </h1>
        <p className="tw-text-white tw-mt-[10px] tw-mb-8">
          um bom site faz toda a diferença...
        </p>
        <a
          className="button"
          href="#contact"
        >
          FAÇA UM ORÇAMENTO
        </a>
      </div>
      <div className="lg:tw-w-[60%] tw-h-full">
        <img src="/banner.svg" className="tw-w-full tw-h-full tw-object-cover" />
      </div>
    </section>
  );
}

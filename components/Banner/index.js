import React from "react";

export default function Banner() {
  return (
    <section className="tw-w-full tw-bg-darkGray tw-flex tw-justify-between tw-items-center">
      <div className=" tw-px-20">
        <h1 className="tw-text-6xl tw-text-white ">
          Explore
          <br /> novas ideias
          <br /> para seu negócio!
        </h1>
        <p className="tw-text-white tw-mt-4 tw-mb-8">
          Um bom site faz toda a diferença...
        </p>
        <a className="tw-bg-purple  tw-p-2 tw-text-white transition ease-in-out hover:tw-bg-white hover:tw-text-darkGray">
          FAÇA UM ORÇAMENTO
        </a>
      </div>
      <div className="tw-w-2/4 tw-object-cover">
        <img src="/banner.svg" className="tw-w-full" />
      </div>
    </section>
  );
}

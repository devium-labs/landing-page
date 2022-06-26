import React from "react";

export default function Header() {
  return (
    <>
      <header className="tw-w-full">
        <nav className="tw-w-full tw-fixed tw-bg-black tw-h-auto tw-border-2 tw-border-white-800 tw-flex tw-justify-between tw-items-center tw-p-3 tw-bg-darkGray">
          <div className="">
            <h1 className="tw-text-white tw-text-3xl">Devium</h1>
          </div>
          <div className="tw-flex">
            <a className="tw-text-white tw-ml-4" href="/#about">
              Sobre
            </a>
            <a className="tw-text-white tw-ml-4" href="/#works">
              Serviços
            </a>
            <a className="tw-text-white tw-ml-4" href="/#jobs">
              Portifólio
            </a>
            <a className="tw-text-white tw-ml-4" href="/#contact">
              Contato
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

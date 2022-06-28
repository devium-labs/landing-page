import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    let burger = document.getElementById("burger").children;
    if (!menu) {
      for (let e of burger) {
        e.classList.add("tw-bg-white");
      }
    } else {
      for (let e of burger) {
        e.classList.remove("tw-bg-white");
      }
    }
    setMenu(!menu)
  }

  return (
    <>
      <header className="tw-w-full tw-border-b-[3px] tw-border-white tw-h-[70px] tw-flex tw-justify-center tw-items-center tw-bg-darkGray tw-px-[20px] tw-fixed">
        <nav className="tw-w-full tw-max-w-[1920px] tw-mx-auto tw-flex tw-justify-between tw-items-center">
          <div>
            <h1 className="tw-text-white tw-text-[32px] sm:tw-text-[42px] tw-font-trap">Devium</h1>
          </div>
          <div className={`tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center tw-absolute tw-top-[70px] tw-right-0 md:tw-static tw-w-screen md:tw-w-auto tw-h-[calc(100vh-70px)] md:tw-h-auto tw-bg-darkGray ${!menu && 'tw-translate-x-[100%]'} md:tw-translate-x-0 tw-ease-out tw-duration-200`}>
            <Link href="/#about"><a onClick={() => handleMenu()} className="nav-link">
              sobre
            </a></Link>
            <Link href="/#works"><a onClick={() => handleMenu()} className="nav-link">
              serviços
            </a></Link>
            <Link href="/#jobs"><a onClick={() => handleMenu()} className="nav-link">
              portifólio
            </a></Link>
            <Link href="/#contact"><a onClick={() => handleMenu()} className="nav-link">
              contato
            </a></Link>

          </div>
            <button onClick={() => handleMenu()} id="burger" className="md:tw-hidden">
              <div className="tw-ease-out tw-duration-100 tw-h-[11px] tw-w-[65px] tw-border-[3px] tw-border-white tw-my-[4px]"></div>
              <div className="tw-ease-out tw-duration-100 tw-h-[11px] tw-w-[65px] tw-border-[3px] tw-border-white tw-my-[4px]"></div>
              <div className="tw-ease-out tw-duration-100 tw-h-[11px] tw-w-[65px] tw-border-[3px] tw-border-white tw-my-[4px]"></div>
            </button>
        </nav>
      </header>
    </>
  );
}

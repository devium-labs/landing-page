import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import Whatsapp from '../Whatsapp'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Whatsapp />
      <Footer />
    </>
  );
}

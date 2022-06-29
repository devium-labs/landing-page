import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Services from "../components/Services";
import About from "../components/About";
import Jobs from "../components/Jobs";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="tw-w-full tw-bg-darkGray tw-flex tw-flex-col tw-items-center">
      <Head>
        <title>Devium</title>
        <meta name="description" content="Empresa especializada em criação de sites e web." />
      </Head>

      <Layout>
        <Banner />
        <About />
        <Services />
        <Jobs />
        <Contact />
      </Layout>
    </div>
  );
}

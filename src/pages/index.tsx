import Head from "next/head";
import { useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Email from "../components/Email";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Social from "../components/Social";
import Works from "../components/Works";
import ReactGA from "react-ga";

export default function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div id="top">
      <Head>
        <title>Kshitiz Baniya</title>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Kshitiz Baniya is a full-stack javascript software developer."
        />
        <meta
          name="keywords"
          content="kshitiz baniya, developer, full-stack developer, javascript"
        />
        <meta name="author" content="Kshitiz Baniya" />
        <meta
          name="image"
          content={`https://www.kshitizbaniya.tech/images/my-page.png`}
        />
        <meta property="og:title" content="Kshitiz Baniya" />
        <meta
          property="og:description"
          content="Kshitiz Baniya is a full-stack javascript software developer."
        />
        <meta
          property="og:image"
          content={`https://www.kshitizbaniya.tech/images/my-page.png`}
        />
        <meta property="og:url" content="https://www.kshitizbaniya.tech/" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main className="px-[25px] lg:px-0">
        <Hero />
        <Social />
        <Email />
        <About />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

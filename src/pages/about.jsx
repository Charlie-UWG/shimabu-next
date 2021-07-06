import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useEffect } from "react";

const About = (props) => {
  const {
    count,
    isShow,
    handleClick,
    handleClickDec,
    handleDisplay,
    text,
    array,
    handleChangeText,
    handleAdd,
  } = props;

  return (
    <div className="min-h-full px-2 flex flex-col justify-center items-center h-screen">
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main page="about" />
      <Footer />
    </div>
  );
};

export default About;

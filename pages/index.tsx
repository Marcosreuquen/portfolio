import type { NextPage } from "next";
import Head from "next/head";

import Header from "components/Header";
import Main from "components/Main";
import Projects from "components/Projects";
import Testimonials from "components/Testimonials";
import Stack from "components/Stack";
import Contact from "components/Contact";
import MainLayout from "components/MainLayout";
import { nerd } from "lib/nerd";
import MainMenu from "ui/mainMenu";

const Home: NextPage = () => {
  nerd();

  return (
    <div>
      <Head>
        <title>Marcos Reuquén - Fullstack Developer</title>
        <meta
          name='description'
          content='I am a passionate full stack developer.'
        />
        <link rel='icon' href='/terminal.svg' />
      </Head>
      <MainLayout ListItem={MainMenu}>
        <Header />
        <Main />
        <Projects />
        {/* <Testimonials /> */}
        <Stack />
        <Contact />
      </MainLayout>
    </div>
  );
};

export default Home;

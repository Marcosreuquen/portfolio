import type { NextPage } from "next";
import Head from "next/head";
import { nerd } from "lib/nerd";
import TestimonialFormMenu from "ui/TestimonialFormMenu";
import MainLayout from "components/MainLayout";
import { TestimonialForm } from "components/TestimonialForm";

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
      <MainLayout ListItem={TestimonialFormMenu}>
        <TestimonialForm />
      </MainLayout>
    </div>
  );
};

export default Home;

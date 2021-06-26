import React from 'react';
import { Layout, Home, About, Skills, CallToAction, Projects, Contact } from '../components';

const IndexPage = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Skills />
      <CallToAction />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

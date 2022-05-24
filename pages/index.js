import Layout from '../components/Layout';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import CallToAction from '../components/CallToAction';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const IndexPage = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <CallToAction />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

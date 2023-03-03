import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Showcase from "../components/Showcase"
import ContactForm from "./Contact";
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer";
import Home from "./Home";

export default function Index() {
  return (
    <>
      <Layout>
        <Header/>
        <Home/>
        <Footer/>
      </Layout>
    </>
  );
}

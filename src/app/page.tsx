import Header from "@/components/Header";
import ProductHero from "@/components/ProductHero";
import Story from "@/components/Story";
import ProductInfo from "@/components/ProductInfo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <ProductHero />
      <Story />
      <ProductInfo />
      <Footer />
    </main>
  );
}
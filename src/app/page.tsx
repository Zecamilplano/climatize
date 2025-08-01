import "./globals.css"
import HomeComponent from "./(home-layout)/page";
import RenderProducts from "./(pages)/produto/page";

export default function Home() {
  return (
    <>
      <HomeComponent />
      <RenderProducts />
    </>
  );
}

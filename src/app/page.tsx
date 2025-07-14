import "./globals.css"
import HomeComponent from "./(pages)/inicio/page";
import RenderProducts from "./(pages)/produto/page";

export default function Home() {
  return (
    <>
      <HomeComponent />
      <RenderProducts />
    </>
  );
}

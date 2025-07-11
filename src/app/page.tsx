import "./globals.css"
import HomeComponent from "./(pages)/inicio/page";
import RenderProducts from "./(pages)/produtos/page";

export default function Home() {
  return (
    <>
      <HomeComponent />
      <RenderProducts />
    </>
  );
}

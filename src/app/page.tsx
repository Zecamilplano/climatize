import "./globals.css"
import HomeComponent from "./(pages)/home/page";
import RenderProducts from "./(pages)/products/page";

export default function Home() {
  return (
    <>
      <HomeComponent />
      <RenderProducts />
    </>
  );
}

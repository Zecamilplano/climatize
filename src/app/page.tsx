import { MenuProvider } from "./contexts/menu-context";
import "./globals.css"
import HomeComponent from "./(pages)/home/page";
import RenderProducts from "./(pages)/products/page";

export default function Home() {
  return (
    <MenuProvider>
      <HomeComponent />
      <RenderProducts />
    </MenuProvider>
  );
}

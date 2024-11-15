import { Header } from "../components/default/header";
import { MainHome } from "../components/home/main";

export function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <MainHome />
    </div>
  )
}

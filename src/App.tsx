import { Header } from "./components/default/header"
import "./index.css"
import { Home } from "./page/home"
import { Products } from "./page/product"

function App() {

  return (
    <div >
      <Header />
      {/* <main className="h-full  flex flex-col bg-main w-screen  items-center justify-center py-3"> */}
      <main className="relative top-[134px]">
        <Home />
        <Products />
      </main>



    </div>
  )
}

export default App

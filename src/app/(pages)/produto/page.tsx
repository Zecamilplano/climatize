import { Header } from "@/app/(components)/(header)/header";
import { RenderCardProduct } from "./render-card-product";

export default function RenderProducts() {
  return (
    <div id="produtos" className=" w-[98.7vw] h-[100dvh] bg-main ">
      <RenderCardProduct />
    </div>
  )
}

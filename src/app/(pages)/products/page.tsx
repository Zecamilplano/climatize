import { CardProduct } from "./card-product";
import { MenuResidentialCommercial } from "./menu-category";

export default function RenderProducts() {
  return (
    <div className="w-[98.7vw] h-[100dvh] bg-main ">
      <MenuResidentialCommercial />
      <CardProduct />
    </div>
  )
}

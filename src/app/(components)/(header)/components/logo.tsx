import { Menu } from "lucide-react"
import Image from "next/image"

export default function LogoComponent() {
  return (
    <div className="flex items-center ">
      {/* <Menu /> */}
      <Image src="/logo.png" width={200} height={200} alt="Logo" />
      {/* <div></div> */}
    </div>
  )
}

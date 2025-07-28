import Image from "next/image"

export default function LogoComponent() {
  return (
    <div className="px-3 py-3">
      <Image src="/logo.png" width={200} height={200} alt="Logo" />
    </div>
  )
}

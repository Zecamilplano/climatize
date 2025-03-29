import { listProducts } from "@/app/data/product";
import Image from "next/image";
import Link from "next/link";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const productId = Number(params.id);

  const product = listProducts.find((p) => p.id === productId);
  //
  if (!product) {
    return <h1>Produto não encontrado</h1>;
  }

  return (
    <section className=" bg-main border-[20px] border-main flex flex-col items-center  rounded-md">
      <div className="bg-white flex flex-col md:w-4/5 md:flex-row desktop-1366:flex-row desktop-1366:h-auto desktop-1366:w-4/5 desktop-1559:flex-row items-center text-left rounded-md">

        <div className="w-full md:w-1/2 flex justify-center self-center p-4 ">
          <div className="relative w-full h-64 md:h-80 lg:h-96">
            <Image
              src={`${product.srcProduct}`}
              alt={`Imagem de ${product.nameProduct}`}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center text-center font-montserrat">
          <h1 className="text-3xl text-title-product-info font-semibold pl-1.5">{product.nameProduct}</h1>
          <p className="text-product-info px-1.5 md:w-[450px] text-xl text-center">{product.description}</p>
          <div className="pt-3">
            <h2 className="text-2xl md:text-[26px] font-medium text-subtitle-product-info mx-1.5">Características principais</h2>
            <ul className="list-disc pl-8 mx-5 m-bottom-5 text-left">
              {product.mainFeatures.map((mainFeature, index) => (
                <li className="text-lg text-sub-text-product-info" key={index}>{mainFeature}</li>))}
            </ul>

            <Link className="text-lg md:text-xl text-white bg-button font-semibold px-3 py-3 mx-3 my-2 mt-4 rounded-md block" href="https://wa.me/5577999827672?text=Ol%C3%A1%2C%20climatize!">Solicitar Preço e Disponibilidade via WhatsApp</Link>
          </div>
        </div>

      </div>

      <div className="bg-white md:w-4/5 ">
        <div className="flex justify-center flex-wrap items-center desktop-1366:justify-evenly desktop-1559:justify-evenly w-4/5 mx-auto gap-5 font-montserrat bg-white">
          <div className=" text-left desktop-1366:w-[40%] rounded-md">
            <h3 className="text-2xl md:text-3xl font-semibold">Características Principais</h3>
            <ul className="ml-4">
              {product.technicalFeatures.map(technicalFeature => (
                <li className="flex items-start">
                  <span className="text-xl mr-2">•</span>
                  <span>{technicalFeature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className=" desktop-1366:w-[40%] desktop-1559:w-auto rounded-md">
            <h3 className="text-2xl md:text-3xl font-semibold">Benefícios</h3>
            <ul className="ml-4">
              {product.benefits.map(benefit => (
                <li className="flex items-start">
                  <span className="text-xl mr-2">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl md:text-3xl font-semibold desktop-1366:w-[50%]">Especificações Técnicas</h3>
            <ul className="ml-4">
              {Object.entries(product.technicalSpecifications).map(([key, value]) => (
                <li className="flex items-start">
                  <span className="text-xl mr-2">•</span>
                  <span>{key}: {value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

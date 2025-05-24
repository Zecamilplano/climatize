import { TypeProduct } from "../types/types"
import API from "./api"

export default async function AddProductDatabese(product: TypeProduct) {

  const formData = new FormData()
  formData.append('nome', product.nameProduct || "")
  formData.append('descricao', product.description || "")
  formData.append('caracteristicas', `${product.mainFeatures}`)
  formData.append('beneficios', `${product.benefits}`)
  formData.append('especificacoes', `${product.technicalSpecifications}`)

  if (product.srcProduct && Array.isArray(product.srcProduct)) {
    const primeiraImagem = product.srcProduct[0];

    // Confirma se tem a propriedade preview e tenta transformar em blob
    if (primeiraImagem && primeiraImagem.preview) {
      const imageResponse = await fetch(primeiraImagem.preview);
      const blob = await imageResponse.blob();
      formData.append("file", blob, primeiraImagem.name || "imagem.png");
    }
  }

  try {
    const response = await fetch(`${API}/produtos`, {
      method: "POST",
      body: formData
    })
    const result = await response.json()
    console.log('Produto adicionado:', result);

  } catch (erro) {
    console.error("Erro ao adicionar produto", erro)
  }
}

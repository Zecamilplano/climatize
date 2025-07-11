import { productUpdateType } from "../types/types";
import API from "./api";

export default async function editProduct(props: productUpdateType) {
  const formData = new FormData()

  formData.append("id", props.id)
  formData.append("categoriaId", props.categoryId)
  formData.append("nome", props.name)
  formData.append("file", props.urlImg || "")
  formData.append("descricao", props.description)
  formData.append("caracteristicas", JSON.stringify(props.features))
  formData.append("beneficios", JSON.stringify(props.benefits))
  formData.append("especificacoes", JSON.stringify(props.specs))

  try {
    const updatedProduct = await fetch(`${API}/produtoInfo`, {
      method: "PUT",
      body: formData
    })

    if (!updatedProduct.ok) {
      throw new Error(`Erro na API: ${updatedProduct.status} ${updatedProduct.statusText}`);

    }

    console.log("Editado com sucesso")

    return { seccess: true, updatedProduct }
  } catch (error) {
    console.error(`❌ Erro ao editar o produto ${props.name}:`, error);
    return { success: false, error }
  }
}

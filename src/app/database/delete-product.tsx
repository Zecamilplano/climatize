"use client"
import API from "./api";

export default async function deleteProduct(id: string) {
  try {
    const response = await fetch(`${API}/produto/${id}`, {
      method: "DELETE"
    })
    if (!response.ok) {
      throw new Error(`Erro ao deletar: ${response.statusText}`);
    }

    console.log(`Produto com ID ${id} deletado com sucesso.`);

  } catch (erro) {
    if (erro instanceof Error) {
      console.error('Erro ao tentar deletar o produto:', erro.message);
    } else {
      console.error('Erro desconhecido ao tentar deletar o produto:', erro);

    }
  }
}

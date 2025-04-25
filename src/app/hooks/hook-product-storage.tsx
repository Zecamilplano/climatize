import { useEffect, useState } from "react";
import { DataToSendType } from "../types/types";

type Produto = {
  nome: string;
  descricao: string;
};

const LOCAL_STORAGE_KEY = "formularioProduto";

export function useProductForm() {
  const [product, setProduct] = useState<Produto>({
    nome: "",
    descricao: "",
  });

  // Carregar do localStorage ao iniciar
  useEffect(() => {
    const savedProduct = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedProduct) {
      setProduct(JSON.parse(savedProduct));
    }
  }, []);

  // Atualizar localStorage sempre que o estado mudar
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(product));
  }, [product]);

  // Atualizar campos
  function updateProduct(campo: keyof Produto, valor: string) {
    setProduct((prev) => ({ ...prev, [campo]: valor }));
  }

  // Limpar tudo (ex: após envio)
  function resetProduct() {
    const vazio = { nome: "", descricao: "" };
    setProduct(vazio);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }

  const saveProduct = async (data: DataToSendType): Promise<void> => {
    const formData = new FormData();

    if (data.images && data.images.length > 0) {
      formData.append('file', data.images[0]); // Apenas o primeiro arquivo
    }

    formData.append('nome', data.name);

    formData.append('descricao', data.description ?? "");
    formData.append('caracteristicas', JSON.stringify(data.features));
    formData.append('beneficios', JSON.stringify(data.benefits));
    formData.append('especificacoes', JSON.stringify(data.specifications));
    console.log(data)

    try {
      const response = await fetch("http://192.168.14.9:3000/produtos", {
        method: "POST",
        body: formData,
      });
      const result = await response.text();

      if (!response.ok) {
        console.error("Erro no envio:", result);
        return;
      }

      console.log("Produto enviado com sucesso:", result);
      // const result = await response.json();
      console.log("Product sent successfully:", response);
    } catch (error) {
      console.error("Error sending product:", error);
    }
  };
  return { product, saveProduct, updateProduct, resetProduct };
}


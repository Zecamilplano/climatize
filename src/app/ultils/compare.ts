import { OriginalDataType, productUpdateType } from "../types/types";

export function arraysSaoIguais(a: any[], b: any[]) {
  if (a.length !== b.length) return false;

  return a.every((itemA, index) => {
    const itemB = b[index];
    return JSON.stringify(itemA) === JSON.stringify(itemB);
  });
}

export function dadosForamAlterados(
  dataToSend: productUpdateType,
  originalData: OriginalDataType
): boolean {
  const idIgual = dataToSend.id === originalData.id;
  const categoriaIgual = dataToSend.categoryId === originalData.categoryId;
  const nomeIgual = dataToSend.name === originalData.name;
  const descricaoIgual = dataToSend.description === originalData.description;
  const caracteristicasIguais = arraysSaoIguais(dataToSend.features, originalData.features);
  const beneficiosIguais = arraysSaoIguais(dataToSend.benefits, originalData.benefits);
  const especificacoesIguais = arraysSaoIguais(dataToSend.specs, originalData.specs);

  return !(
    idIgual &&
    categoriaIgual &&
    nomeIgual &&
    descricaoIgual &&
    caracteristicasIguais &&
    beneficiosIguais &&
    especificacoesIguais
  );
}

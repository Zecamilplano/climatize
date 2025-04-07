"use client"

import { StaticImageData } from "next/image";

const textButtonValue = "Comprar"

export type TypeProduct = {
  id: number;
  nameProduct: string;
  srcProduct: StaticImageData | string;
  textButton: typeof textButtonValue;
  sectionArea: string
  description: string
  mainFeatures: string[]
  technicalFeatures: string[]
  benefits: string[]
  technicalSpecifications: Record<string, string>
}

export type TypeCardInformation = {
  titleInformation: string
  listInformation: string[]
  addNewInformationPlaceholder: string
  noPaddingX?: boolean
}

export type imagesType = {
  name: string
  size: number
  preview: string
}[]

export type saveProductType = {
  nome: string
  descricao: string
}

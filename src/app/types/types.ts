"use client"

import { StaticImageData } from "next/image";

const textButtonValue = "Comprar"

export type TypeProduct = {
  id?: number;
  nameProduct?: string;
  srcProduct?: StaticImageData | File | string | imagesType;
  textButton?: typeof textButtonValue;
  sectionArea?: string
  description?: string
  mainFeatures?: string[]
  technicalFeatures?: string[]
  benefits?: string[]
  technicalSpecifications?: Record<string, string>
}

export type TypeCardInformation = {
  titleInformation?: string
  listInformation?: string[]
  addNewInformationPlaceholder?: string
  noPaddingX?: boolean
}

export type TypeListCard = {
  featuresMain: TypeCardInformation
  benefits: TypeCardInformation
  technicalSpecification: TypeCardInformation
}

export type imagesType = {
  name: string
  size: number
  preview: string
  file?: File
}[]

export type saveProductType = {
  nome: string
  descricao: string
}

export type DataToSendType = {
  name: string;
  description?: string;
  images?: File[];
  features?: string[];
  benefits?: string[];
  specifications?: string[];
}

"use client"

import { StaticImageData } from "next/image"

const textButtonValue = "Comprar"

export type TypeProduct = {
  id?: number
  nameProduct?: string
  srcProduct?: StaticImageData | File | string | imagesType
  textButton?: typeof textButtonValue
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
  preview: string
  file?: File
}[]

export type saveProductType = {
  nome: string
  descricao: string
}

export type DataToSendType = {
  name: string
  description?: string
  images?: File[]
  features?: string[]
  benefits?: string[]
  specifications?: string[]
  categoriaId: string
}


export type ProductPortugueseType = {
  produtos: string[]
  id: string
  nome: string
  urlImage: string | null
  descricao: string
  caracteristicas: string[]
  beneficios: string[]
  especificacoes: string[]
  categoriaId: string
  categoria?: {
    id?: string
    nome: string
  }
}

export type categoryType = {
  nome: string
  produtos: ProductPortugueseType[]
}
/*update product*/
export type productUpdateType = {
  id: string
  categoryId: string
  name: string
  urlImg?: string | File
  description: string
  features: string[]
  benefits: string[]
  specs: string[]
}

export type OriginalDataType = {
  id: string
  categoryId: string
  name: string
  description: string
  features: any[]
  benefits: any[]
  specs: any[]
}
/*update product*/

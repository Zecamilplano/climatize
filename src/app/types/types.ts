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


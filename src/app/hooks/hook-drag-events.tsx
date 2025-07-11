"use client"

import { useRef, useState } from "react"
import { imagesType } from "../types/types"

type FileData = {
  name: string
  size: number
  sizeMB: string
  preview: string
  file: File
}
export function UseDragEvents() {

  const [images, setImages] = useState<imagesType>([])
  const [isDragging, setIsDragging] = useState(false)

  const dragEvents = {
    onDragEnter: (e: React.DragEvent<HTMLDivElement>) => {
      setIsDragging(true)
      e.preventDefault()
      e.stopPropagation()
    },

    onDragLeave: (e: React.DragEvent<HTMLDivElement>) => {
      setIsDragging(false)
      e.preventDefault()
      e.stopPropagation()
    },

    onDragOver: (e: React.DragEvent<HTMLDivElement>) => {
      setIsDragging(true)
      e.preventDefault()
      e.stopPropagation()
    },

    onDrop: (e: React.DragEvent<HTMLDivElement>) => {
      setIsDragging(false)
      e.preventDefault()
      e.stopPropagation()
      const files = Array.from(e.dataTransfer.files)
      const image = files.map(file => {
        const { name, size } = file
        return { name, size, sizeMB: formatFileSize(file.size), preview: URL.createObjectURL(file) }
      })
      setImages(image)
    }
  }

  function removeImage(index?: number) {
    if (typeof index === "number") {
      setImages(prev => prev.filter((_, i) => i !== index))
    } else (
      setImages([])
    )
  }

  function formatFileSize(sizeInBytes: number) {
    console.log("Tamanho original da imagem " + (sizeInBytes / 1048576).toFixed(2) + " MB") // Converte para MB e mantém 2 casas decimais
  }


  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>,
    errorImgCallback: (msg: string) => void,
  ) {
    event.preventDefault()
    if (!event.target.files) return

    const files = Array.from(event.target.files)
    const image = files.map(file => ({
      name: file.name,
      preview: URL.createObjectURL(file),
      file: file
    }))

    if (files.length > 0) {
      errorImgCallback("")
    }

    setImages(image)
  }

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const divRef = useRef<HTMLDivElement | null>(null)

  function handleDivClick() {
    fileInputRef.current?.click()
  }


  return { images, setImages, dragEvents, removeImage, handleFileChange, handleDivClick, divRef, fileInputRef, isDragging }
}

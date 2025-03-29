"use client"

import { useEffect, useRef, useState } from "react"
import { imagesType } from "../types/types"

export function UseDragEvents() {

  const [images, setImages] = useState<imagesType>([])
  const [isDragging, setIsDragging] = useState(false)

  const dragEvents = {
    onDragEnter: (e: React.DragEvent<HTMLDivElement>) => {
      setIsDragging(true)
      e.preventDefault()
    },

    onDragLeave: (e: React.DragEvent<HTMLDivElement>) => {
      setIsDragging(false)
      e.preventDefault()
    },

    onDragOver: (e: React.DragEvent<HTMLDivElement>) => {
      setIsDragging(true)
      e.preventDefault()
    },

    onDrop: (e: React.DragEvent<HTMLDivElement>) => {
      setIsDragging(false)
      e.preventDefault()
      const files = Array.from(e.dataTransfer.files)
      const image = files.map(file => {
        const { name, size } = file
        return { name, size, preview: URL.createObjectURL(file) }
      })
      setImages(image)
    }
  }

  function removeImage() {
    setImages([])
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return

    const files = Array.from(event.target.files)
    const image = files.map(file => ({
      name: file.name,
      size: file.size,
      preview: URL.createObjectURL(file)
    }))
    setImages(image)

  }

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const divRef = useRef<HTMLDivElement | null>(null)

  function handleDivClick() {
    divRef.current?.click()
  }


  return { images, setImages, dragEvents, removeImage, handleFileChange, handleDivClick, divRef, fileInputRef, isDragging }
}

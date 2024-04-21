// import { createContext, useContext, useState, useRef } from 'react'
// import { fabric } from 'fabric' // 確保引入fabric

// const FlowerContext = createContext()

// export const useFlower = () => useContext(FlowerContext)

// export const FlowerProvider = ({ children }) => {
//   const [currentImage, setCurrentImage] = useState(null) // 用於儲存當前圖像的參照
//   const canvasRef = useRef(null)

//   const addImageToCanvas = (url, { color, name }) => {
//     if (canvasRef.current && url) {
//       new fabric.Image.fromURL(url, (img) => {
//         img.set({
//           left: 100,
//           top: 100,
//           scaleX: 0.5,
//           scaleY: 0.5,
//           name,
//           color,
//         })
//         canvasRef.current.add(img)
//         canvasRef.current.renderAll()
//         setCurrentImage(img) // 儲存當前圖像參照
//       })
//     }
//   }

//   const removeCurrentImage = () => {
//     if (canvasRef.current && currentImage) {
//       canvasRef.current.remove(currentImage)
//       canvasRef.current.renderAll()
//       setCurrentImage(null) // 清除儲存的圖像參照
//     }
//   }

//   return (
//     <FlowerContext.Provider
//       value={{ addImageToCanvas, removeCurrentImage, canvasRef }}
//     >
//       {children}
//     </FlowerContext.Provider>
//   )
// }

// import {
//   createContext,
//   useContext,
//   useCallback,
//   useRef,
//   useState,
//   useEffect,
// } from 'react'
// import { fabric } from 'fabric' // 確保引入fabric
// import { GrRotateLeft } from 'react-icons/gr'
// const FlowerContext = createContext()

// export const useFlower = () => useContext(FlowerContext)

// export const FlowerProvider = ({ children }) => {
//   const canvasRef = useRef(null)
//   const tempObjectRef = useRef(null)
//   const [imagesInfo, setImagesInfo] = useState([])
//   useEffect(() => {
//     if (canvasRef.current) {
//       const canvas = canvasRef.current
//       const rotateIcon = new Image()
//       rotateIcon.onload = () => {
//         fabric.Object.prototype.controls.mtr = new fabric.Control({
//           x: 0.5,
//           y: -0.5,
//           offsetY: -10, // 控制點向上偏 不會覆蓋物體
//           offsetX: 10,
//           cursorStyle: 'pointer',
//           actionHandler: fabric.controlsUtils.rotationWithSnapping,
//           render: (ctx, left, top, styleOverride, fabricObject) => {
//             const size = fabricObject.cornerSize
//             ctx.save()
//             ctx.translate(left, top)
//             ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle))
//             ctx.drawImage(rotateIcon, -size / 2, -size / 2, size, size)
//             ctx.restore()
//           },
//           cornerSize: 24,
//         })
//       }
//       rotateIcon.src = '/custom/custom/rotateIcon.png'
//       fabric.Object.prototype.hasControls = true
//       fabric.Object.prototype.hasBorders = true
//       fabric.Object.prototype.borderColor = '#FF7C7C'
//       fabric.Object.prototype.borderScaleFactor = 1.5
//       // Hide other controls
//       ;['tl', 'tr', 'bl', 'br', 'mt', 'mb', 'ml', 'mr'].forEach((ctrl) => {
//         fabric.Object.prototype.controls[ctrl].visible = false
//       })
//     }
//   }, [canvasRef])

//   const addImageToCanvas = useCallback((url, metadata) => {
//     if (!canvasRef.current) {
//       console.error('Canvas is not initialized.')
//       return
//     }

//     const canvas = canvasRef.current

//     // 移除當前預覽的圖片
//     if (tempObjectRef.current) {
//       canvas.remove(tempObjectRef.current)
//     }

//     console.log(`Loading image from URL: ${url}`)
//     new fabric.Image.fromURL(url, (img) => {
//       if (!img) {
//         console.error('Failed to load image')
//         return
//       }

//       img.set({
//         left: 180,
//         top: 35,
//         scaleX: 0.5,
//         scaleY: 0.5,
//         originX: 'center',
//         originY: 'center',
//         lockScalingX: true,
//         lockScalingY: true,
//         ...metadata,
//       })
//       canvas.add(img)
//       canvas.renderAll()
//       tempObjectRef.current = img // 更新暫存的當前預覽圖片
//     })
//   }, [])
//   // 確認當前預覽圖片，並將其永久保存至畫布
//   const commitImageToCanvas = useCallback(() => {
//     if (tempObjectRef.current) {
//       const imgInfo = {
//         url: tempObjectRef.current.url,
//         left: tempObjectRef.current.left,
//         top: tempObjectRef.current.top,
//         scaleX: tempObjectRef.current.scaleX,
//         scaleY: tempObjectRef.current.scaleY,
//         name: tempObjectRef.current.name,
//         color: tempObjectRef.current.color,
//         zIndex: tempObjectRef.current.zIndex,
//       }
//       setImagesInfo((prev) => [...prev, imgInfo])
//       tempObjectRef.current = null
//     }
//   }, [])

//   // 清除當前預覽的圖片
//   const removeCurrentImage = useCallback(() => {
//     if (canvasRef.current && tempObjectRef.current) {
//       canvasRef.current.remove(tempObjectRef.current)
//       canvasRef.current.renderAll()
//       tempObjectRef.current = null
//     }
//   }, [])

//   // 清除整個畫布
//   const clearCanvas = useCallback(() => {
//     if (canvasRef.current) {
//       canvasRef.current.clear()
//     }
//   }, [])

//   // 快照畫布
//   const snapshotCanvas = useCallback(() => {
//     return canvasRef.current?.toDataURL()
//   }, [])

//   return (
//     <FlowerContext.Provider
//       value={{
//         addImageToCanvas,
//         commitImageToCanvas,
//         removeCurrentImage,
//         clearCanvas,
//         snapshotCanvas,
//         canvasRef,
//         imagesInfo,
//       }}
//     >
//       {children}
//     </FlowerContext.Provider>
//   )
// }
// import {
//   createContext,
//   useContext,
//   useCallback,
//   useRef,
//   useState,
//   useEffect,
// } from 'react'
// import { fabric } from 'fabric' // 確保引入fabric

// const FlowerContext = createContext()

// export const useFlower = () => useContext(FlowerContext)

// export const FlowerProvider = ({ children }) => {
//   const canvasRef = useRef(null)
//   const tempObjectRef = useRef(null)
//   const [imagesInfo, setImagesInfo] = useState([])
//   useEffect(() => {
//     if (!canvasRef.current) {
//       return
//     }

//     const canvas = new fabric.Canvas(canvasRef.current)
//     setupCustomControls(canvas)
//   }, [])

//   const setupCustomControls = (canvas) => {
//     const rotateIcon = new Image()
//     rotateIcon.onload = () => {
//       fabric.Object.prototype.controls.mtr = new fabric.Control({
//         x: 0.5,
//         y: -0.5,
//         offsetY: -10,
//         offsetX: 10,
//         cursorStyle: 'pointer',
//         actionHandler: fabric.controlsUtils.rotationWithSnapping,
//         render: (ctx, left, top, styleOverride, fabricObject) => {
//           const size = fabricObject.cornerSize
//           ctx.save()
//           ctx.translate(left, top)
//           ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle))
//           ctx.drawImage(rotateIcon, -size / 2, -size / 2, size, size)
//           ctx.restore()
//         },
//         cornerSize: 24,
//       })
//     }
//     rotateIcon.src = '/custom/custom/rotateIcon.png'
//   }

//   const addImageToCanvas = useCallback((url, metadata) => {
//     if (!canvasRef.current) {
//       console.error('Canvas is not initialized.')
//       return
//     }

//     const canvas = canvasRef.current

//     // 移除當前預覽的圖片
//     if (tempObjectRef.current) {
//       canvas.remove(tempObjectRef.current)
//     }

//     console.log(`Loading image from URL: ${url}`)
//     new fabric.Image.fromURL(url, (img) => {
//       if (!img) {
//         console.error('Failed to load image')
//         return
//       }

//       img.set({
//         left: 180,
//         top: 35,
//         scaleX: 0.5,
//         scaleY: 0.5,
//         originX: 'center',
//         originY: 'center',
//         lockScalingX: true,
//         lockScalingY: true,
//         ...metadata,
//       })
//       canvas.add(img)
//       canvas.renderAll()
//       tempObjectRef.current = img // 更新暫存的當前預覽圖片
//     })
//   }, [])

//   const commitImageToCanvas = useCallback(() => {
//     if (!tempObjectRef.current) return

//     const imgInfo = {
//       url: tempObjectRef.current.url,
//       left: tempObjectRef.current.left,
//       top: tempObjectRef.current.top,
//       scaleX: tempObjectRef.current.scaleX,
//       scaleY: tempObjectRef.current.scaleY,
//       name: tempObjectRef.current.name,
//       color: tempObjectRef.current.color,
//       zIndex: tempObjectRef.current.zIndex,
//     }
//     setImagesInfo((prev) => [...prev, imgInfo])
//     tempObjectRef.current = null
//   }, [])

//   const removeCurrentImage = useCallback(() => {
//     if (!canvasRef.current || !tempObjectRef.current) return

//     canvasRef.current.remove(tempObjectRef.current)
//     canvasRef.current.renderAll()
//     tempObjectRef.current = null
//   }, [])

//   const clearCanvas = useCallback(() => {
//     if (!canvasRef.current) return

//     canvasRef.current.clear()
//   }, [])

//   const snapshotCanvas = useCallback(() => {
//     if (!canvasRef.current) return null

//     return canvasRef.current.toDataURL()
//   }, [])

//   return (
//     <FlowerContext.Provider
//       value={{
//         addImageToCanvas,
//         commitImageToCanvas,
//         removeCurrentImage,
//         clearCanvas,
//         snapshotCanvas,
//         canvasRef,
//         imagesInfo,
//       }}
//     >
//       {children}
//     </FlowerContext.Provider>
//   )
// }

import {
  createContext,
  useContext,
  useCallback,
  useRef,
  useState,
  useEffect,
} from 'react'
import { fabric } from 'fabric' // 确保引入fabric库

const FlowerContext = createContext()

export const useFlower = () => useContext(FlowerContext)

export const FlowerProvider = ({ children }) => {
  const canvasRef = useRef(null)
  const tempObjectRef = useRef(null)
  const [imagesInfo, setImagesInfo] = useState([])

  useEffect(() => {
    if (canvasRef.current && !canvasRef.current.fabric) {
      const fabricCanvas = new fabric.Canvas(canvasRef.current)
      canvasRef.current.fabric = fabricCanvas // 存储fabric.Canvas实例
      setupCustomControls(fabricCanvas)
    }
  }, [])

  const setupCustomControls = (canvas) => {
    const rotateIcon = new Image()
    rotateIcon.onload = () => {
      fabric.Object.prototype.controls.mtr = new fabric.Control({
        x: 0.5,
        y: -0.5,
        offsetY: -10,
        offsetX: 10,
        cursorStyle: 'pointer',
        actionHandler: fabric.controlsUtils.rotationWithSnapping,
        render: (ctx, left, top, styleOverride, fabricObject) => {
          const size = fabricObject.cornerSize
          ctx.save()
          ctx.translate(left, top)
          ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle))
          ctx.drawImage(rotateIcon, -size / 2, -size / 2, size, size)
          ctx.restore()
        },
        cornerSize: 24,
      })
    }
    rotateIcon.src = '/custom/custom/rotateIcon.png'
    fabric.Object.prototype.hasControls = true
    fabric.Object.prototype.hasBorders = true
    fabric.Object.prototype.borderColor = '#FF7C7C'
    fabric.Object.prototype.borderScaleFactor = 1.5
    // Hide other controls
    ;['tl', 'tr', 'bl', 'br', 'mt', 'mb', 'ml', 'mr'].forEach((ctrl) => {
      fabric.Object.prototype.controls[ctrl].visible = false
    })
  }

  const addImageToCanvas = useCallback((url, metadata) => {
    if (!canvasRef.current || !canvasRef.current.fabric) {
      console.error('Canvas is not initialized.')
      return
    }

    const canvas = canvasRef.current.fabric // 使用存储的fabric.Canvas实例

    // 移除当前预览的图片
    if (tempObjectRef.current) {
      canvas.remove(tempObjectRef.current)
      tempObjectRef.current = null // 清空引用
    }

    new fabric.Image.fromURL(url, (img) => {
      if (!img) {
        console.error('Failed to load image')
        return
      }

      img.set({
        left: 250,
        top: 120,
        scaleX: 0.5,
        scaleY: 0.5,
        originX: 'center',
        originY: 'center',
        lockScalingX: true,
        lockScalingY: true,
        ...metadata,
      })
      canvas.add(img)
      canvas.renderAll() // 正确调用renderAll方法
      tempObjectRef.current = img // 更新暂存的当前预览图片
    })
  }, [])

  const commitImageToCanvas = useCallback(() => {
    if (tempObjectRef.current) {
      const img = tempObjectRef.current
      const imgInfo = {
        url: img.url,
        color: img.color,
        // left: img.left,
        // top: img.top,
        relativeLeft: img.left - clipBounds.left, // 相对于遮罩的位置
        relativeTop: img.top - clipBounds.top,
        scaleX: img.scaleX,
        scaleY: img.scaleY,
        name: img.name, // assuming `name` is part of metadata if needed
        // color: img.fill, // assuming `color` is part of metadata if needed
        zIndex: img.zIndex,
      }
      setImagesInfo((prev) => [...prev, imgInfo])
      tempObjectRef.current = null // 清空引用，表示提交完成
    }
  }, [])
  const removeCurrentImage = useCallback(() => {
    if (
      !canvasRef.current ||
      !canvasRef.current.fabric ||
      !tempObjectRef.current
    )
      return

    const canvas = canvasRef.current.fabric
    canvas.remove(tempObjectRef.current)
    canvas.renderAll()
    tempObjectRef.current = null
  }, [])

  const clearCanvas = useCallback(() => {
    if (!canvasRef.current || !canvasRef.current.fabric) return

    const canvas = canvasRef.current.fabric
    canvas.clear()
  }, [])

  const snapshotCanvas = useCallback(() => {
    if (!canvasRef.current || !canvasRef.current.fabric) return null

    return canvasRef.current.fabric.toDataURL()
  }, [])

  return (
    <FlowerContext.Provider
      value={{
        addImageToCanvas,
        commitImageToCanvas,
        removeCurrentImage,
        clearCanvas,
        snapshotCanvas,
        setupCustomControls,
        canvasRef,
        imagesInfo,
      }}
    >
      {children}
    </FlowerContext.Provider>
  )
}

import React, { useState } from 'react'
import ColorSelector from '../common/ColorSelector'
import DraggableBar from './DraggableBar'
import ChangeComponent from './ChangeComponent'
const LeafComponent = ({ onNext, onPrev, items }) => {
  const [selectedItem, setSelectedItem] = useState(null)

  const handleSelectItem = (attributes, categoryName) => {
    setSelectedItem({ attributes, categoryName })
  }

  return (
    <>
      {selectedItem ? (
        <ColorSelector
          itemAttribute={selectedItem.attributes}
          categoryName={selectedItem.categoryName}
          onConfirm={() => setSelectedItem(null)}
        />
      ) : (
        <div className="h-full w-full text-tertiary-black flex flex-col justify-start items-center">
          <div className="text-center min-h-[95px]">
            <h1 className="text-3xl py-2">葉材</h1>
            <p className="text-tertiary-gray-100 text-sm px-16 inline-block h-auto">
              花束中的葉子或綠色植物部分，用來填補和增加整束花的層次感和豐富度。
            </p>
          </div>
          <div className="w-full h-full relative">
            <DraggableBar
              items={items}
              onItemSelect={handleSelectItem}
              itemHeight={25}
              dragBuffer={50}
              className="w-[150px] min-h-[580px] h-[770px] mx-auto pt-2"
            />
            <ChangeComponent onNext={onNext} onPrev={onPrev} />
          </div>
        </div>
      )}
    </>
  )
}

export default LeafComponent

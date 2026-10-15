import React from 'react'

interface ImageProps {
  data: {
    src: string,
    title: string,
    description: string,
  }[];
  onClick: (index:number) => void;
}

export default function Images({data, onClick}: ImageProps) {
  
  const handleClickImage = (index:number) => {
    onClick(index);
  }; 

  return (
    <div className="max-w-300 mx-auto my-8 grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-4">
      {data.map((slide, index) => (
        <div
          key={index}
          onClick={() => handleClickImage(index)}
          className="w-full h-80 cursor-pointer"
        >
          <img 
            src={slide.src} 
            alt={slide.description}  
            className="size-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}

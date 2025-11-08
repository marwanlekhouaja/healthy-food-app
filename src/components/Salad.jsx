import React from 'react'

 
function Salad({salad}) {
  return (
    <div className='flex items-center justify-center w-full gap-3 mt-4'>
        <div>
            <img src={salad.picture} width={170} height={170} />
        </div>
        <div className="content flex flex-col">
            <h4 className='text-gray-800'>{salad.name}</h4>
            <h3><strong>{salad.price}</strong></h3>
            <p className='w-2/4'>{salad.description}</p>
        </div>
    </div>
  )
}

export default Salad
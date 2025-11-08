import React from 'react'
import { useParams } from 'react-router-dom'

function DetailSalad() {
    const namesalad=useParams()
    console.log(namesalad);
    
  return (
    <div>DetailSalad</div>
  )
}

export default DetailSalad
import React from 'react'
import CardTotal from '../components/CardTotal'

const random = () => {
  return (
    <div>
        let data  = 3;



   let cartData = structuredClone(data)

   if(cartData[itemId]){

     if(cartData[itemId][size]){
        cartData[itemId][size]  += 1;
     }else{
        cartData[itemId][size] =1
     }
        
   }else{
    cartData[itemId][size] = {}
    cartData[itemId][size] = 1
   }


    </div>
  )
}

export default random
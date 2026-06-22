import React, { useContext } from 'react'
import Title from './Title'
import { ShopContext } from '../contect/ShopContext'

const CardTotal = () => {

    const {currency,delivery_fee,getCartAmout} = useContext(ShopContext)

  return (
    <div className='w-full' >
       <div className='text-2xl'>
          <Title text1={'CART'} text2={'TOTALS'}/>
       </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
           <div className='flex justify-between'>
                 <p>Subtotal</p>
                 <p>{currency}{getCartAmout()}..00</p>
           </div>
           <hr/>
         <div className='flex justify-between'>
            <p>Shopping Fee</p>
            <p>{currency} {delivery_fee}</p>
         </div>
         <hr/>
         <div className='flex justify-between'>
            <p>Total</p>
            <p>{currency} {getCartAmout() === 0 ? 0 : getCartAmout() + delivery_fee} </p>
         </div>
      </div>

    </div>
  )
}

export default CardTotal
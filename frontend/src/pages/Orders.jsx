import React, { useContext } from 'react'
import { ShopContext } from '../contect/ShopContext'
import Title from '../components/Title'

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>
      
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>
        
      <div className='mt-8'>
        {
          products.slice(1, 4).map((item, index) => (
            <div key={index} className='py-6 border-t border-b text-gray-700 flex 
            flex-col md:flex-row  md:items-center  md:justify-between gap-4'>
                
                {/* Left Section: Image + Text Details */}
                <div className='flex items-start gap-6 text-sm'>
                  <img className='w-16 sm:w-20 bg-slate-100' src={item.image[0]} alt='' />
                  
                  {/* 🛠️ FIXED: Saare text ko is ek single div mein wrap kiya taaki ye image ke bagal me block banke rahe */}
                  <div className='flex flex-col gap-1'>
                    
                    {/* Row 1: Name */}
                    <p className='sm:text-base font-medium text-gray-900'>{item.name}</p>
                    
                    {/* Row 2: Price + Quantity + Size (Ek line me) */}
                    <div className='flex items-center gap-3 text-sm text-gray-600 mt-1'>
                      <p className='font-medium text-gray-900'>{currency}{item.price}</p>
                      <p>Quantity: 1</p>
                      <p>Size: M</p>
                    </div>

                    {/* Row 3: Date */}
                    <p className='text-xs text-gray-500 mt-2'>Date: <span className='text-gray-400'>25, Jul, 2024</span></p>
                    
                  </div>
                </div>

                {/* Right Section: Status Indicator */}
                <div className='flex items-center justify-between md:w-1/2'>
                  <div className='flex items-center gap-2'>
                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                    <p className='text-sm sm:text-base font-medium text-gray-700'>Ready to ship</p>
                  </div>
                    <button className='border px-4 py-2 text-sm font-medium rounded-sm' >Track Order</button>
                </div>

            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Orders
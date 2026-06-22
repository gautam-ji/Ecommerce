

import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useSearchParams } from 'react-router-dom' // Note: Is hook ko abhi niche kahi use nahi kiya gaya hai
import { toast } from 'react-toastify'
import axios from 'axios'
import { backendUrl } from '../App'


const Add = ({token}) => {

  // --- 1. Images State (Har image file ko alag state mein store karne ke liye) ---
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  // --- 2. Text aur Number Inputs State ---
  const [name, setName] = useState("");              // Product ka naam save karne ke liye
  const [description, setDescription] = useState(""); // Product ka description save karne ke liye
  const [price, setPrice] = useState("");            // Product ki price save karne ke liye

  // --- 3. Dropdowns (Select) State ---
  const [category, setCategory] = useState("");       // Men, Women, Kids filter ke liye
  const [subCategory, setSubCategory] = useState(""); // Topwear, Bottomwear ke liye

  // --- 4. Checkbox aur Array States ---
  const [bestseller, setBestseller] = useState(false); // True/False track karne ke liye (Bestseller hai ya nahi)
  const [sizes, setSizes] = useState([]);              // Multiple sizes (S, M, L) ko ek array mein store karne ke liye

const onSubmitHandler = async (e) =>{
        e.preventDefault();

        try{

      const formData = new FormData()

      formData.append("name",name)
      formData.append("price",price)
      formData.append("description",description)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("bestseller",bestseller)
      formData.append("sizes", JSON.stringify(sizes)) // ✅

      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)

      const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})
       
      if(response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setSizes('')
        setCategory('')
        setSubCategory('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')

      }else {
        toast.error(response.data.message)
      }

    } catch(error){

    }

     
}




  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start justify-center gap-3' >
      
      {/* ================= IMAGE UPLOAD SECTION ================= */}
      <div>
        <p className='mb-2' >Upload Imae</p>

        <div className='flex gap-2'>
            {/* Image 1 Selector */}
            <label htmlFor='image1'>
              <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1) } alt=''/>
              <input onChange={(e)=>setImage1(e.target.files[0])} type='file' id='image1' hidden/>
            </label>

            {/* Image 2 Selector */}
            <label htmlFor='image2'>
              <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt=''/>
              <input onChange={(e)=>setImage2(e.target.files[0])} type='file' id='image2' hidden/>
            </label>

            {/* Image 3 Selector */}
            <label htmlFor='image3'>
               <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3) } alt=''/>
              <input onChange={(e)=>setImage3(e.target.files[0])} type='file' id='image3' hidden />
            </label>

            {/* Image 4 Selector */}
            <label htmlFor='image4'>
              <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4) } alt=''/>
              <input onChange={(e)=>setImage4(e.target.files[0])} type='file' id='image4' hidden />
            </label>
        </div>
      </div>

      {/* ================= PRODUCT NAME INPUT ================= */}
      <div className='w-full'>
          <p className='mb-1 text-xl' >Product name</p>
          <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Type here' required />
      </div>
        
      {/* ================= PRODUCT DESCRIPTION TEXTAREA ================= */}
      <div>
        <p className='mb-1 text-xl'>Product description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full m-w-[540px] ' placeholder='Write content here' ></textarea>
      </div>
 
      {/* ================= CATEGORY, SUB-CATEGORY & PRICE ROW ================= */}
      <div className=' flex flex-col sm:flex-row gap-2 w-full sm:gap-8' >
         
         {/* Main Category Dropdown */}
         <div>
          <p className='text-xl ' >Product category</p>
           <select onChange={(e)=> setCategory(e.target.value)} className='py-2 px-7'>
            <option  value='Men'>Men</option>
            <option  value='Women'>Women</option>
            <option  value='Kids'>Kids</option>
           </select>
         </div>

         {/* Sub Category Dropdown */}
         <div>
            <p className='text-xl' >Sub category</p>
            <select onChange={(e)=>setSubCategory(e.target.value)} className='py-2 px-6'>
              <option value='TopWear'>Topwear</option>
              <option value='Bottomwear'>BottomWear</option>
              <option value='Winterwear'>Winter wear</option>
            </select>
         </div>

         {/* Product Price Input */}
         <div>
          <p>Product Price</p>
            <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type='number' placeholder='25'/>
         </div>

      </div>

      {/* ================= PRODUCT SIZES SELECTION ================= */}
      <div className=''>
        <p className='text-xl mb-2'>Product Sizes</p>
         <div className='flex gap-10'>
          
          {/* Size S Box */}
          <div onClick={()=>setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, 'S'] )} className='w-8 text-center py-1 px-1 cursor-pointer' >
            <p className={` ${sizes.includes('S') ? 'bg-pink-100' :'bg-gray-200 ' } `}>S</p>
          </div>
          
          {/* Size M Box */}
          <div onClick={()=>setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, 'M'])} className=' w-8 text-center py-1 px-1 cursor-pointer'  >
            <p className={`${sizes.includes('M') ? 'bg-pink-100' : 'bg-gray-100' }`}>M</p>
          </div>

          {/* Size L Box */} 
          <div onClick={()=>setSizes(prev => prev.includes("L") ? prev.filter(item => item !== 'L') : [...prev, 'L'])} className=' w-8 text-center py-1 px-1 cursor-pointer'>
            <p className={`${sizes.includes('L') ? 'bg-pink-100' : 'bg-gray-100' }`} >L</p>
          </div>

          {/* Size XL Box */}
          <div onClick={()=>setSizes(prev => prev.includes('XL') ? prev.filter(item => item !== 'XL') : [...prev, 'XL'])} className=' text-center p-1 px-2 cursor-pointer ' >
            <p className={`${sizes.includes('XL') ? 'bg-pink-100' : 'bg-gray-200' }`}>XL</p>
          </div>
          
          {/* Size XXL Box */}
          <div onClick={()=>setSizes(prev => prev.includes('XXL') ? prev.filter(item => item !== 'XXL') : [...prev, 'XXL'])} className=' text-center py-1 px-3 cursor-pointer'>
            <p className={`${sizes.includes('XXL') ? 'bg-pink-100' : 'bg-gray-200' }`}>XXL</p>
          </div>

         </div>
      </div>

      {/* ================= BESTSELLER CHECKBOX ================= */}
      <div className='flex gap-2 mt-2'>
        <input className='cursor-pointer' onChange={()=>setBestseller(prev => !prev)} type='checkbox' id='bestseller' />
        <label className='ml-2 cursor-pointer' htmlFor='bestseller' >Add to bestseller</label>
      </div>

      {/* ================= SUBMIT BUTTON ================= */}
      <button className= ' cursor-pointer w-28 py-3 mt-4 bg-black text-white'>ADD </button>
      
    </form>
  )
}

export default Add
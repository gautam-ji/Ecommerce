import orderModel from '../models/orderMode.js'
import userModel from '../models/userModel.js';


// placing orders using COD Method

 const placeOrder = async(req, res) =>{
          try {
            const {userId, items, amount, address } = req.body;

            const orderData = {
                userId,
                items,
                amount,
                address,
                paymentMethod:"COD",
                payment:false,
                date: Date.now()
            }

            const newOrder = new orderModel(orderData)
            await newOrder.save()

            await userModel.findByIdAndUpdate(userId,{cartData:{}})
            res.json({success:true,message:"Order Plaxed"})
            

          } catch (error){
               console.log(error)
               res.json({success:false,message:error.message})
          }
          
 }

 //placing order using Stripe method
 const placeOrderStripe = async (req, res) =>{

 }

// Placing orders using Razerpay Method
const placeOrderRazerpay = async (req, res) =>{

}

// All Orders data for Admin Panel
const allOrders = async (req, res)=>{

}

//User Order Data For Frontend
const userOrders = async (req,res) =>{

}

const updateStatus = async (req, res) =>{


}

export { placeOrder,allOrders, placeOrderStripe, placeOrderRazerpay, userOrders, updateStatus}
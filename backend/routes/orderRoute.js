import express from 'express'
import { placeOrder, placeOrderStripe, placeOrderRazerpay,allOrders, userOrders, updateStatus,} from '../controller/orderController.js'
const orderRouter = express.Router();
import adminAuth from '../middleware/adminAuth.js'
import auth from '../middleware/auth.js'



//Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//Payment Features
orderRouter.post('/place',auth,placeOrder)
orderRouter.post('/stripe',auth,placeOrderStripe)
orderRouter.post('/razorpay ',auth,placeOrderRazerpay)


//user Features
orderRouter.post('/userorders',auth,userOrders)

export default orderRouter;
"use client"
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../ui/button'
import { addCart, removeCart } from '@/store/slices/cartSlice';

const AddToCartButton = ({productItem}) => {
   const {cartItems}= useSelector((state)=>state?.cartItems);
    const dispatch=useDispatch();
    console.log("state",cartItems)
    console.log("prod",productItem)
    const isSelected=cartItems?.some((item)=>item.id==productItem?.id)
    return (
        <div className='mt-8 max-w-md'>
            <Button onClick={()=>!isSelected ? dispatch(addCart(productItem)):dispatch(removeCart(productItem?.id))}>
               { isSelected ? "Remove Cart" :"Add to cart"}
            </Button>
        </div>
    )
}

export default AddToCartButton
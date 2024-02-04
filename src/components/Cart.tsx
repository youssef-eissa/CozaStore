import {  Drawer } from 'antd';
import { useState } from 'react';
import BadgeCon from './antd/Badgs'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector,useDispatch } from 'react-redux';
import { UserCart } from './useQuery/API'
import {UserCarts,CartProduct } from './types/appTypes';
import './Cart.css'
import { setProductID } from './Redux/ProductID';
import { setOpenOverview } from './Redux/OpenOverview';
import { Button } from './styledComponents/Button';
import { useNavigate } from 'react-router-dom';



function Cart() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const token=useSelector((state:{TheUser:{token:string}})=>state.TheUser.token)
    const {cart} = UserCart()
    const [open, setOpen] = useState(false);


    const onClose = () => {
    setOpen(false);
    };
    function handleNavigate(){
        navigate('/checkout')
    setOpen(false);
    }
    return (
    <div className={`cart ${token===""?'d-none':'d-block'}`}>
        <BadgeCon CartsLength={cart&&cart[0]?.products.length} open={open} setOpen={setOpen} icon={<ShoppingCartOutlined style={{fontSize:25}}/>} />
    <Drawer  className='CartDrawer' title="Cart"  onClose={onClose} open={open}>
                <div className='col-12 d-flex h-100 flex-column'>
                    {cart?.map((cart: UserCarts) => {
                    
                    return cart?.products.map((product: CartProduct) => {
                        return <div key={product.id} className='col-12 mb-3 d-flex justify-content-between ProductBox'>
                        <div className='imgBox col-3 rounded overflow-hidden'>
                            <img alt='img' className='img-fluid h-100 w-100' src={product.thumbnail } />
                        </div>
                        <div className='col-8 productInfo d-flex justify-content-center flex-column'>
                            <span onClick={() => { dispatch(setOpenOverview(true)); dispatch(setProductID(product.id))}} className='col-12'>{product.title}</span>
                                <span className='col-12 mt-2 '>{product.quantity} <span style={{ color: '#888888' }}>x</span>  ${product.price}</span>
                        </div>
                        </div>
                        
                    })
                    
                    })}

                    <div className='col-12 total d-flex flex-column mt-auto py-5'>
                        <span className='col-12 py-3'>Total: ${cart && cart[0]?.total.toFixed(2)}</span>
                        <Button onClick={handleNavigate} background='black' color='white' backgroundhover='#717fe0' colorhover='white'>Checkout</Button>
                    </div>
                </div>
        </Drawer>
    </div>
)
}

export default Cart

import { Link } from 'react-router-dom'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import {   MouseEvent, useState } from 'react';
import { Button } from './styledComponents/Button';
import icon1 from './assets/icon-pay-01.png'
import icon2 from './assets/icon-pay-02.png'
import icon3 from './assets/icon-pay-03.png'
import icon4 from './assets/icon-pay-04.png'
import icon5 from './assets/icon-pay-05.png'
import { CiHeart } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { setFilterCategories } from './Redux/FilterCategories';




function Footer() {
    const dispatch=useDispatch()
    const [email, setEmail] = useState<string>('')
    function NavigateToShop(e: MouseEvent<HTMLAnchorElement>) {
        window.scrollTo(0, 0)
        dispatch(setFilterCategories(e.currentTarget.innerHTML))
    }

    return (
        <div className='container-fluid FooterContainer '>
            <div className='row'>
                <div className='col-12 d-flex flex-column'>
                    <div className='col-12 d-flex flex-column flex-md-row FooterBoxes'>
                        <div className='col-md-3 col-12 d-flex flex-column'>
                            <h1 className='mb-4'>Categories</h1>
                            <Link reloadDocument onClick={NavigateToShop} to='/shop'>All Categories</Link>
                            <Link reloadDocument onClick={NavigateToShop} to='/shop'>Women</Link>
                            <Link reloadDocument onClick={NavigateToShop} to='/ shop'>Men</Link>
                            <Link reloadDocument onClick={NavigateToShop} to='/shop'>Accessories</Link>
                        </div>
                        <div className='col-md-3 col-12 d-flex flex-column'>
                            <h1 className='mb-4'>Help</h1>
                            <Link to='/'>Track Orders</Link>
                            <Link to='/'>Return</Link>
                            <Link to='/'>Shipping</Link>
                            <Link to='/'>FAQs</Link>
                        </div>
                        <div className='col-md-3 col-12 d-flex flex-column'>
                            <h1 className='mb-4'>get in touch</h1>
                            <p className='col-10 mb-4'>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                            <div className='col-12 d-flex justify-content-center column-gap-3 icons'>
                                <Link to='/'>
                                    <FaFacebookF />
                                </Link>
                                <Link to='/'>
                                    <FaInstagram  />
                                </Link>
                                <Link to='/'>
                                    <FaPinterestP  />
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-3 col-12 d-flex flex-column'>
                            <h1 className='mb-4'>NEWSLETTER</h1>
                            <div className='col-12 inputDiv'>
                                <input
                                
                                className='col-12'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter your email'
                                type='text'
                                />
                                <div className='AnimationBar'></div>
                                
                        </div>
                            <Button className='mt-3 col-6 d-flex mx-auto' background='#717fe0' color='white' backgroundhover='white' colorhover='#717fe0'>Subscribe</Button>
                        </div>
                    </div>
                    <div className='col-12 d-flex flex-column p-3 BottomFooter align-items-center justify-content-center'>
                        <div className='mb-2 col-12 d-flex justify-content-center icons column-gap-2'>
                            <img src={icon1} alt=""/>
                            <img src={icon2} alt=""/>
                            <img src={icon3} alt=""/>
                            <img src={icon4} alt=""/>
                            <img src={icon5} alt=""/>
                        </div>
                        <p className='col-12 text-center'>Copyright ©2024 All rights reserved | This template is made with <CiHeart/>  by <span>Youssef Eissa</span></p>
                    </div>
                </div>
            </div>
    </div>
)
}

export default Footer
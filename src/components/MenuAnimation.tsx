import { Twirl as Hamburger } from 'hamburger-react'
import {  Drawer } from 'antd';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


function MenuAnimation() {
    const location=useLocation()
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
    setOpen(true);
};

    const onClose = () => {
    setOpen(false);
};
    return (
    <div  className='d-md-none mobileMenuCon'>
        <Hamburger onToggle={showDrawer}  toggled={open} distance="sm" size={25} />
    <Drawer width={300} title="Menu" onClose={onClose} open={open}>
        <div  className='col-12 MobileMenu d-flex flex-column justify-content-center h-100'>
                        <div className='p-3  '>
                        <Link style={location.pathname === '/' ? { color: '#007bff' } : { color: '#333333' }} onClick={() => { window.scrollTo(0, 0); onClose()}} className='NavLink ' to='/'>Home</Link>
                        </div>
                        <div className='p-3 '>
                        <Link style={location.pathname === '/shop' ? {color:'#007bff'} : {color:'#333333'}} onClick={() => { window.scrollTo(0, 0); onClose()}}className='NavLink' to='/shop'>shop</Link>
                        </div>
                        <div className='p-3 '>
                        <Link style={location.pathname === '/about' ? {color:'#007bff'} : {color:'#333333'}} onClick={() => { window.scrollTo(0, 0); onClose()}} className='NavLink' to='/about'>about</Link>
                        </div>
                        <div className='p-3'>
                        <Link style={location.pathname === '/contact' ? {color:'#007bff'} : {color:'#333333'}} onClick={() => { window.scrollTo(0, 0); onClose()}} className='NavLink' to='/contact'>contact</Link>
                        </div>
                    </div>
        </Drawer>
    </div>
)
}

export default MenuAnimation

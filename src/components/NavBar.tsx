import './NavBar.css'
import logo from '../components/assets/logo-01.png.webp'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import BadgeCon from './antd/Badgs'
import { ShoppingCartOutlined } from '@ant-design/icons';
import MenuAnimation from './MenuAnimation'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchOpen } from './Redux/SearchOpen'




function NavBar() {
    const location=useLocation()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const FreeShipDiv = useRef<HTMLDivElement>(null)
    const NavBarRef = useRef<HTMLDivElement>(null)
    function handleNavBarScroll() {
        const scroll = window.scrollY
        if (FreeShipDiv.current && NavBarRef.current) {
            if (scroll > FreeShipDiv.current.offsetHeight) {
                NavBarRef.current.classList.add('ActionOnScroll')
                
            }  else {
                NavBarRef.current.classList.remove('ActionOnScroll')
            }
            
        }
        
    }

    useEffect(() => {
        window.addEventListener('scroll', handleNavBarScroll)
        return () => {
            window.removeEventListener('scroll', handleNavBarScroll)
        }
        
    },[])


    return (
        <div className='container-fluid navbarContainer '>
            <div className='row d-flex justify-content-center align-items-center flex-column'>
                <div ref={FreeShipDiv} className='p-0 col-12 d-flex justify-content-center freeShipping  align-items-center '>
                    <p className='col-6 m-0'>Free shipping for standard order over $100</p>
                    <div className='col-4 rightBox d-flex'>
                        <span className='px-4 py-2'>Help & FAQs</span>
                        <span className='px-4 py-2'>My Account</span>
                        <span className='px-4 py-2'>EN</span>
                        <span className='px-4 py-2'>USD</span>
                    </div>
                </div>
                <div ref={NavBarRef} className='col-12 NavBar justify-content-center d-flex p-0'>
                    <div className='col-2 logoCon d-flex align-items-center '>
                        <img style={{cursor:'pointer'}} onClick={()=>navigate('/')}  alt='logo' className='img-fluid' src={logo}/>
                    </div>
                    <div className='col-5 d-flex'>
                        <div className='p-3'>
                        <Link style={location.pathname === '/' ? {color:'#007bff'} : {color:'#333333'}} onClick={()=>window.scrollTo(0,0)} className='NavLink' to='/'>Home</Link>
                        </div>
                        <div className='p-3'>
                        <Link style={location.pathname === '/shop' ? {color:'#007bff'} : {color:'#333333'}} onClick={()=>window.scrollTo(0,0)} className='NavLink' to='/shop'>shop</Link>
                        </div>
                        <div className='p-3'>
                        <Link style={location.pathname === '/about' ? {color:'#007bff'} : {color:'#333333'}} onClick={()=>window.scrollTo(0,0)} className='NavLink' to='/about'>about</Link>
                        </div>
                        <div className='p-3'>
                        <Link style={location.pathname === '/contact' ? {color:'#007bff'} : {color:'#333333'}} onClick={()=>window.scrollTo(0,0)} className='NavLink' to='/'>contact</Link>
                        </div>
                    </div>
                    <div className='col-3 icons d-flex align-items-center justify-content-end'>
                        <SearchOutlined onClick={()=>dispatch(setSearchOpen())}  style={{ fontSize: 25,cursor: 'pointer',userSelect: 'none' }} />
                        <BadgeCon to='/' icon={<ShoppingCartOutlined style={{fontSize:25}}/>} />
                        <MenuAnimation />
                    </div>
                </div>
            </div>
    </div>
)
}

export default NavBar
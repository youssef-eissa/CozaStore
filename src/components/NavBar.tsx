import './NavBar.css'
import logo from '../components/assets/logo-01.png.webp'
import { Link } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import BadgeCon from './antd/Badgs'
import { ShoppingCartOutlined } from '@ant-design/icons';
import MenuAnimation from './MenuAnimation'

type TNavBar = {
    open: boolean,
    setOpen: (open: boolean) => void
}
function NavBar({open, setOpen}: TNavBar) {
    return (
        <div className='container-fluid navbarContainer '>
            <div className='row d-flex justify-content-center align-items-center flex-column'>
                <div className='p-0 col-12 d-flex justify-content-center freeShipping  align-items-center '>
                    <p className='col-6 m-0'>Free shipping for standard order over $100</p>
                    <div className='col-4 rightBox d-flex'>
                        <span className='px-4 py-2'>Help & FAQs</span>
                        <span className='px-4 py-2'>My Account</span>
                        <span className='px-4 py-2'>EN</span>
                        <span className='px-4 py-2'>USD</span>
                    </div>
                </div>
                <div className='col-10 NavBar d-flex p-0'>
                    <div className='col-2 logoCon d-flex align-items-center'>
                        <img alt='logo' className='img-fluid' src={logo}/>
                    </div>
                    <div className='col-7 d-flex'>
                        <div className='p-3'>
                        <Link className='NavLink' to='/'>Home</Link>
                        </div>
                        <div className='p-3'>
                        <Link className='NavLink' to='/'>shop</Link>
                        </div>
                        <div className='p-3'>
                        <Link className='NavLink' to='/'>features</Link>
                        </div>
                        <div className='p-3'>
                        <Link className='NavLink' to='/'>blog</Link>
                        </div>
                        <div className='p-3'>
                        <Link className='NavLink' to='/'>about</Link>
                        </div>
                        <div className='p-3'>
                        <Link className='NavLink' to='/'>contact</Link>
                        </div>
                    </div>
                    <div className='col-3 icons d-flex align-items-center justify-content-end'>
                        <SearchOutlined style={{ fontSize: 25,cursor: 'pointer' }} />
                        <BadgeCon to='/' icon={<ShoppingCartOutlined style={{fontSize:25}}/>} />
                        <MenuAnimation open={open} setOpen={setOpen}/>
                    </div>
                </div>
            </div>
    </div>
)
}

export default NavBar
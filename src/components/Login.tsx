import { useSelector,useDispatch } from 'react-redux'
import bg from './assets/bg-01.jpg.webp'
import { HeaderSection } from './styledComponents/HeaderSection'
import './Login.css'
import { setUsername,setPassword } from './Redux/UserCredentials'
import { Button } from './styledComponents/Button'
import { TheUser } from './useQuery/API'
import { FormEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'
import { ToastContainer, toast ,Flip} from 'react-toastify';



function Login() {
    const { mutate, isError, isPending, error } = TheUser()
    

    const navigate=useNavigate()
    const dispatch = useDispatch()
    const username = useSelector((state: { UserInfo: { username: string } }) => state.UserInfo.username)

    const password = useSelector((state: { UserInfo: { password: string } }) => state.UserInfo.password)
    const token=useSelector((state:{TheUser:{token:string}})=>state.TheUser.token)
    

    useEffect(() => {
        if (isError) {
            toast.error('Invalid Username or Password');
        }
    },[isError,error])
   
    useEffect(() => {
     if (token!=='') {
         navigate('/')
         window.location.reload()
        }
    }, [token,navigate])    
        
    if (isPending) {
        return <Loader/>
    }

    function handleFormSubmit(e: FormEvent<HTMLFormElement>,) {
        e.preventDefault()
        mutate()
    }
    
    return (
        <div className='container-fluid'>
            <div className='row'>
                <HeaderSection background={bg}>
                <h1>Login</h1>
        </HeaderSection>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-center login '>
                        <form onSubmit={handleFormSubmit} className='col-6 rounded d-flex flex-column align-items-center my-5 p-3'>
                            <h4>Welcome to Coza Store</h4>
                            <input
                                className='col-8 my-3 p-3 rounded'
                                type='text'
                                value={username}
                                placeholder='Username'
                                onChange={(e) => dispatch(setUsername(e.target.value))}
                            />
                            <input
                                className='col-8 my-3 p-3 rounded'
                                type='text'
                                value={password}
                                placeholder='Password'
                                onChange={(e) => dispatch(setPassword(e.target.value))}
                            />
                            <Button type='submit' className='col-6 mt-3' background='black' color='white' colorhover='white' backgroundhover='#717fe0'>Login</Button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip}

                />
    </div>
  )
}

export default Login
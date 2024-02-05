import axios from "axios";
import { useQuery,useMutation } from "@tanstack/react-query";
import { Product, User } from "../types/appTypes";
import { useSelector,useDispatch } from "react-redux";
import { setToken, setUser } from "../Redux/TheUser";
import { setPassword,setUsername } from "../Redux/UserCredentials";
import { UserCarts } from "../types/appTypes";



function getProducts() {
    return axios.get('https://dummyjson.com/products?limit=100')
}
export function AllCategories() {

const categories=useSelector((state:{FilterCategories:{FilterCategories:string}})=>state.FilterCategories.FilterCategories)

        const { data:Products,isFetching} = useQuery({
    queryKey: ['products',categories],
        queryFn: getProducts,
    enabled: categories==='All Categories' ||categories==='Women' || categories==='Men'|| categories==='Accessories',
        select: data => categories === 'All Categories' ? data.data.products.filter((product: Product) => product.category === 'tops' || product.category === 'womens-dresses' || product.category === 'womens-shoes' || product.category === 'mens-shirts' || product.category === 'mens-shoes' || product.category === 'mens-watches' || product.category === 'womens-watches' || product.category === 'womens-bags' || product.category === 'sunglasses')
            :
            categories === 'Women'
            ?
                data.data.products.filter((product: Product) => product.category === 'tops' || product.category === 'womens-dresses' || product.category === 'womens-shoes')
                
                : categories === 'Men' ?
                data.data.products.filter((product: Product) =>   product.category === 'mens-shirts' || product.category === 'mens-shoes'   )
                    : categories === 'Accessories' &&

                    data.data.products.filter((product: Product) => product.category === 'mens-watches' || product.category === 'womens-watches' || product.category === 'womens-bags' || product.category === 'sunglasses'),
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false
        })
    return {Products,isFetching} as {
        Products: Product[],
        isFetching: boolean
    }
}
    
function getUserLogin(username: string,password: string) {
    return axios.post(`https://dummyjson.com/auth/login`, {
        username,
        password
    }, {
        headers: { 'Content-Type': 'application/json' },
    })
}



export function TheUser() {

    const dispatch=useDispatch()
    const username = useSelector((state: { UserInfo: { username: string } }) => state.UserInfo.username)

    const password = useSelector((state: { UserInfo: { password: string } }) => state.UserInfo.password)

    const {mutate,data:user,isError,isPending,error,isSuccess:userSuccess} = useMutation({
        mutationKey: ['user'],
        mutationFn: () => getUserLogin(username, password),
        onSuccess: (data) => {
            dispatch(setToken(data.data.token))
            dispatch(setUser(data.data))
            dispatch(setPassword(''))
            dispatch(setUsername(''))
        },
        
    })
   
    return {
        user,
        mutate,
        isPending,
        isError,
        error,
        userSuccess
    }
}

function getUserData(id:number | undefined) {
    return axios.get(`https://dummyjson.com/users/${id}`)
}
export function UserData() {
    const theUser=useSelector((state:{TheUser:{user:string}})=>state.TheUser.user) as User

    const { data: userData } = useQuery({
        queryKey: ['userData'],
        queryFn: () => getUserData(theUser?.id),

        enabled: !!theUser,
        select: data => data.data,
        
    })
    return { userData } as { userData: User }
}



function getUserCart(id:number | undefined) {
    return axios.get(`https://dummyjson.com/user/${id}/carts`)
}

export function UserCart() {
    const theUser=useSelector((state:{TheUser:{user:string}})=>state.TheUser.user) as User

    const {data :cart ,isSuccess:isCartSuccess}=useQuery({
        queryKey: ['userCart',theUser.id],
        queryFn: () => getUserCart(theUser.id),
        enabled: theUser.id!==undefined,
        select: data => data.data.carts
        
    })
    return {cart,isCartSuccess} as { cart: UserCarts[], isCartSuccess: boolean }
}
    function getProductOverView(ProductID:number) {
        return axios.get(`https://dummyjson.com/products/${ProductID}`)
    }
export function GetProduct() {

    const ProductID = useSelector((state: { ProductID: { id: number } }) => state.ProductID.id)
    
    const OpenOverview = useSelector((state: { OpenOverview: { openOverview: boolean } }) => state.OpenOverview.openOverview)
    
        const { data: product ,isFetching } = useQuery({
        queryKey: ['productOverview',ProductID],
        queryFn: ()=>getProductOverView(ProductID),
        enabled: OpenOverview,
        select: data => data.data as Product
        })
   
    return {product,isFetching}
}
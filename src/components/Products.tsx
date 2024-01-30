import './Products.css'
import banner1 from './assets/banner-01.jpg.webp'
import banner2 from './assets/banner-02.jpg'
import banner3 from './assets/sunglassBanner.webp'
import { Link, useLocation } from 'react-router-dom'
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Product } from './types/appTypes'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Overview from './Overview'
import { HeartOutlined } from '@ant-design/icons'
import {  useDispatch } from 'react-redux'
import { setProductID } from './Redux/ProductID'
import { setOpenOverview } from './Redux/OpenOverview'
import Loader from './Loader'




function Products() {
    const dispatch=useDispatch()
    const location=useLocation()
    const ProductsRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (ProductsRef.current) {
            if (location.pathname === '/shop') {
                ProductsRef.current.classList.add('setMargin')
            } else {
                ProductsRef.current.classList.remove('setMargin')
            }
        }
    },)
    

    const [FilterCategories, setFilterCategories] = useState<string>('All categories')
    function getProducts() {
    return axios.get('https://dummyjson.com/products?limit=100')
}
    const { data:Products,isFetching} = useQuery({
    queryKey: ['products',FilterCategories],
        queryFn: getProducts,
    enabled: FilterCategories==='All categories' ||FilterCategories==='Women' || FilterCategories==='Men'|| FilterCategories==='Accessories',
        select: data => FilterCategories === 'All categories' ? data.data.products.filter((product: Product) => product.category === 'tops' || product.category === 'womens-dresses' || product.category === 'womens-shoes' || product.category === 'mens-shirts' || product.category === 'mens-shoes' || product.category === 'mens-watches' || product.category === 'womens-watches' || product.category === 'womens-bags' || product.category === 'sunglasses')
            :
            FilterCategories === 'Women'
            ?
                data.data.products.filter((product: Product) => product.category === 'tops' || product.category === 'womens-dresses' || product.category === 'womens-shoes')
                
                : FilterCategories === 'Men' ?
                data.data.products.filter((product: Product) =>   product.category === 'mens-shirts' || product.category === 'mens-shoes'   )
                    : FilterCategories === 'Accessories' &&

                    data.data.products.filter((product: Product) => product.category === 'mens-watches' || product.category === 'womens-watches' || product.category === 'womens-bags' || product.category === 'sunglasses'),
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false
    })

    function GetFilterCats(e: MouseEvent<HTMLSpanElement>) {
        setFilterCategories(e.currentTarget.innerHTML)
    }

    if (isFetching ) {
        return <Loader/>
    }

    return (
        <div className='container-fluid productsContainer pb-5'>
            {location.pathname === '/' &&
            <div className='row d-flex justify-content-center threeBoxes'>
                <div  className='col-11 mt-5 d-flex justify-content-center column-gap-3'>
                    <div  className='text-decoration-none col-4 CatBox'>
                        <div className='col-12 imgBoxBanner'>
                            <img alt='img' className='img-fluid w-100 h-100' src={banner1}/>
                        </div>
                        <div className='CatBoxText p-4 col-12 d-flex flex-column justify-content-between'>
                            <div>
                                <h1>Women</h1>
                            <span>Spring 2024</span>
                            </div>
                            <Link to='/' className='d-flex align-self-start flex-column justify-content-end align-items-center '>
                                    <div>Shop Now</div>
                                    <div className='bar'></div>
                            </Link>
                        </div>
                        
                    </div>
                    <div  className='text-decoration-none col-4 CatBox'>
                        <div className='col-12 imgBoxBanner'>
                            <img alt='img' className='img-fluid w-100 h-100' src={banner2}/>
                        </div>
                        <div className='CatBoxText p-4 col-12 d-flex flex-column justify-content-between'>
                            <div>
                                <h1>Men</h1>
                            <span>Spring 2024</span>
                            </div>
                            <Link to='/' className='d-flex align-self-start flex-column justify-content-end align-items-center '>
                                    <div>Shop Now</div>
                                    <div className='bar'></div>
                            </Link>
                        </div>
                        
                </div>
                    <div  className='text-decoration-none col-4 CatBox'>
                        <div className='col-12 imgBoxBanner'>
                            <img alt='img' className='img-fluid w-100 h-100' src={banner3}/>
                        </div>
                        <div className='CatBoxText p-4 col-12 d-flex flex-column justify-content-between'>
                            <div>
                                <h1>Sunglasses</h1>
                            <span>Spring 2024</span>
                            </div>
                            <Link to='/' className='d-flex align-self-start flex-column justify-content-end align-items-center '>
                                    <div>Shop Now</div>
                                    <div className='bar'></div>
                            </Link>
                        </div>
                        
                </div>
                </div>
            </div>
            }
            <div  className='row d-flex flex-column align-items-center categoriesRow mt-5'>
                <div ref={ProductsRef} className='col-10 d-flex flex-column align-items-center '>
                    <div className='col-10 d-flex categoriesHeader'>
                        <div className='col-12 d-flex justify-content-center categoriesTitle'>
                            <span style={FilterCategories === 'All categories' ? {color:'black',borderBottom:'1px solid black'}:{color:'#888888',border:'none'}} onClick={GetFilterCats} >All categories</span>

                        <span style={FilterCategories === 'Women' ? {color:'black',borderBottom:'1px solid black'}:{color:'#888888',border:'none'}} onClick={GetFilterCats}>Women</span>
                        <span onClick={GetFilterCats} style={FilterCategories === 'Men' ? {color:'black',borderBottom:'1px solid black'}:{color:'#888888',border:'none'}}>Men</span>
                        <span onClick={GetFilterCats} style={FilterCategories === 'Accessories' ? {color:'black',borderBottom:'1px solid black'}:{color:'#888888',border:'none'}}>Accessories</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='row d-flex mt-5 justify-content-center productsRow'>
                <div className='col-10 d-flex flex-wrap justify-content-center gap-4'>
                    {Products?.map((product: Product) => {
                        return <motion.div
                            initial={{transform:'scale(0)'}}
                            whileInView={{transform:'scale(1)'}}
                            viewport={{once:true}}
                            transition={{duration:0.5}}
                            key={product.id} className='col-3 d-flex flex-column ProductCard'>
                            <div className='col-12 imgBox rounded overflow-hidden'>
                                <img className='img-fluid h-100 w-100' src={product.thumbnail} alt='img' />
                                <div className='Overview'>
                                    <button onClick={() => { dispatch(setOpenOverview(true)); dispatch(setProductID(product.id))}} className="px-3 py-2">Quick View</button>
                                </div>
                            </div>
                            <div className='col-12 d-flex ProductInfo'>
                                <div className='col-10 d-flex flex-column align-items-start'>
                                    <span  className='ProductTitle col-12'>{product.title}</span>
                                    <span className='ProductPrice col-12 mt-2'>${product.price.toFixed(2)}</span>
                                </div>
                                <div className='col-2 icon d-flex align-items-center justify-content-center'>
                                    <HeartOutlined />
                                </div>
                            </div>
                        </motion.div>
                    })}
                </div>
            </div>
            <Overview  />
            
    </div>
)
}

export default Products
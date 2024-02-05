import {   useEffect, useMemo, useRef, useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { setOpenOverview } from './Redux/OpenOverview'
import Loader from "./Loader"
import { motion } from "framer-motion"
import { GetProduct } from "./useQuery/API"



function Overview() {
    const dispatch=useDispatch()

    
    const OpenOverview = useSelector((state: { OpenOverview: { openOverview: boolean } }) => state.OpenOverview.openOverview)



   const {product,isFetching}=GetProduct()

    const [currentImg, setCurrentImg] = useState<string>('')

    const OverviewBox=useRef<HTMLDivElement>(null)

    const overViewRef=useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (overViewRef.current) {
            if (OpenOverview) {
            overViewRef.current.style.display='block'
        } else {
            overViewRef.current.style.display='none'
        }
    }
    }, [OpenOverview])
   
    const originalPrice = useMemo(() => {
        if (product) {
            const discountRate = (product?.discountPercentage / 100) 
        const totalPrice=(product?.price/(1-discountRate))
        return totalPrice
        }
    },[product])
    
    function handleEscClose(e: KeyboardEvent) {
        if (e.key === 'Escape') {
            dispatch(setOpenOverview(false))
        }
    }
        
    useEffect(() => {
        document.addEventListener('keydown',handleEscClose)
        return () => {
            document.removeEventListener('keydown',handleEscClose)
        }
    },)
    useEffect(() => {
        if (product) {
            setCurrentImg(product.thumbnail)
        }
    },[product])

    useEffect(() => {
        window.addEventListener('click', (e) => {

            if (OverviewBox.current && OpenOverview) {
                if (!OverviewBox.current.contains(e.target as Node)) {
                    dispatch(setOpenOverview(false))
                }
            }
    })
    },[OpenOverview,dispatch])

    if (isFetching ) {
        return <Loader/>
    }
    const animate={
        start:{
            transform: 'scale(0.5)',
            opacity:0
        },
        animate:{
            transform: 'scale(1)',
            opacity:1
            
        }
    }


return (
    <div ref={overViewRef} className='container-fluid overviewContainer'>
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div ref={OverviewBox} className="col-9 rounded overviewBox p-5 d-flex flex-column flex-md-row justify-content-between">
                <div className="col-md-1 col-12 images d-flex flex-md-column flex-row row-gap-3">
                    {product?.images.map((image: string) => {
                        return <div key={image} className="overviewImageBox col-md-12 col p-1">
                            <img onClick={() => setCurrentImg(image)} alt="img" className="img-fluid h-100 w-100" src={ image} />
                        </div>
                    })}
                </div>
                <div className="col-md-5 col-12  overviewImg">
                    <div className="mainImg col-12 ">
                        <motion.img
                            initial='start'
                            animate='animate'
                            transition={{ duration: 0.5 }}
                            variants={animate}
                            key={currentImg}
                            
                        alt="img" className="img-fluid h-100 w-100" src={currentImg} />
                    </div>
                </div>
                <div className="col-md-5 col-12 overviewInfo d-flex flex-column">
                    <h1 className="col-12">{product?.title}</h1>
                    <div className="col-12 d-flex productPrice">
                        <span>${product?.price.toFixed(2)}</span>
                        <del className="ms-4">${originalPrice?.toFixed(2) }</del>
                    </div>
                    <p className="col-12 mt-3">{product?.description}</p>
                    
                    <div className="col-12 d-flex ">
                        Brand : <span className="ms-2">{product?.brand}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Overview
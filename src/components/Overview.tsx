import {  useEffect, useMemo, useRef, useState } from "react"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { useDispatch, useSelector } from "react-redux"
import { setOpenOverview } from './Redux/OpenOverview'
import Loader from "./Loader"
import { Product } from "./types/appTypes"



function Overview() {
    const dispatch=useDispatch()

    const ProductID = useSelector((state: { ProductID: { id: number } }) => state.ProductID.id)
    const OpenOverview = useSelector((state: { OpenOverview: { openOverview: boolean } }) => state.OpenOverview.openOverview)
    
    
    function getProductOverView() {

        return axios.get(`https://dummyjson.com/products/${ProductID}`)
    }

    const { data: product ,isFetching } = useQuery({
        queryKey: ['productOverview',ProductID],
        queryFn: getProductOverView,
        enabled: OpenOverview,
        select: data => data.data as Product
    })

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

    // function closeBox(e: MouseEvent) {
    //     e.stopPropagation()
    //     if ( !OverviewBox.current?.contains(e.target as Node)) {

    //         setOpenOverview(false)
    //     }
    // }
    // useEffect(() => {
    //     document.addEventListener('click', closeBox)
    //     return () => {
    //         document.removeEventListener('click', closeBox)
    //     }
    // })
    if (isFetching ) {
        return <Loader/>
    }
return (
    <div ref={overViewRef} className='container-fluid overviewContainer'>
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div ref={OverviewBox} className="col-9 rounded overviewBox p-5 d-flex justify-content-between">
                <div className="col-1 images d-flex flex-column row-gap-3">
                    {product?.images.map((image: string) => {
                        return <div key={image} className="overviewImageBox col-12 p-1">
                            <img onClick={() => setCurrentImg(image)} alt="img" className="img-fluid h-100 w-100" src={ image} />
                        </div>
                    })}
                </div>
                <div className="col-5  overviewImg">
                    <div className="mainImg col-12 ">
                        <img alt="img" className="img-fluid h-100 w-100" src={currentImg}/>
                    </div>
                </div>
                <div className="col-5 overviewInfo d-flex flex-column">
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
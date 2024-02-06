import Slider from "react-slick"
import banner1 from  './assets/slide-01.jpg.webp'
import banner2 from  './assets/slide-02.jpg.webp'
import banner3 from './assets/ssg.webp'
import './Banner.css'
import { motion } from "framer-motion"
import { MouseEvent, useState } from "react"
import { Link } from "react-router-dom"
import { CaretRightOutlined } from "@ant-design/icons"
import { CaretLeftOutlined } from "@ant-design/icons"
import { setFilterCategories } from "./Redux/FilterCategories"
import { useDispatch } from "react-redux"
function Banner() {
const dispatch=useDispatch()
    function SliderButton({arrow,onClick}:any) {
        return <div style={{cursor:'pointer'}} className="d-flex align-items-center justify-content-center" onClick={onClick} >{arrow}</div>
    }
    const [current, setCurrent] = useState<number>(0);
    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    afterChange: (c: number) => setCurrent(c),
    pauseOnHover: false,
    nextArrow: <SliderButton  arrow={<CaretRightOutlined  className="slider-button next   d-flex align-items-center justify-content-center"  />}/>,
    prevArrow: <SliderButton arrow={<CaretLeftOutlined className="slider-button left d-flex align-items-center justify-content-center"  />} />,
};
    const animate1 = {
        p1start: {
            opacity: 0,
            y:-20
        },
        p1animate: {
            opacity: 1,
            y:0
        },
        p2start: {
            opacity: 0,
            y:20
        },
        p2animate: {
            opacity: 1,
            y:0
        },
        linkStart: {
            opacity: 0,

            transform: 'scale(0)',
            transition:{
                duration:0
            }

        },
        linkAnimate: {
            opacity: 1,

            transform:'scale(1)',
        }

    }
    const animate2 = {
        p1start: {
            opacity: 0,
            transform: ' translateX(-200px) rotate(-120deg)'
        },
        p1animate: {
            opacity: 1,
            transform: 'rotate(0) translateX(0)'
            
        },
        p2start: {
            opacity: 0,
            x:200
        },
        p2animate: {
            opacity: 1,
            x:0
        },
        linkStart: {
            y: 100,
            opacity: 0,
            transition:{
                duration:0
            }

        },
        linkAnimate: {
            y: 0,
            opacity:1
        }

    }
    const animate3 = {
        p1start: {
            opacity: 0,
            transform: 'rotate(-90deg)',
        },
        p1animate: {
            opacity: 1,
            transform: 'rotate(0)',
            transformOrigin: 'left '

        },
        p2start: {
            opacity: 0,
            transform: 'rotate(-90deg)',
        },
        p2animate: {
            opacity: 1,
            transform: 'rotate(0)',
            transformOrigin: 'right '
        },
        linkStart: {
        transform:'rotate(90deg)',
            opacity: 0,
            transition:{
                duration:0
            }

        },
        linkAnimate: {
        transform:'rotate(0)',

            opacity:1
        }

    }
    function handleNavigation(e:MouseEvent<HTMLAnchorElement>,category:string) {
        window.scrollTo(0, 0)
        dispatch(setFilterCategories(category))
    }
    return (
        <div style={{backgroundColor:'white'}} className="container-fluid overflow-hidden">
            <div className="row">
                <div className="p-0 col-12 banner">
                    <Slider className="BannerSlider "  {...settings} >
                        <div className="bannerBG" >
                            <img alt="banner" className="img-fluid h-100 w-100" src={banner1} />
                            <div className="BannerParagraph d-flex flex-column align-items-center ">
                                <motion.p
                                    animate={current === 0 ? 'p1animate' : 'p1start'}
                                    variants={animate1}
                                    transition={{ duration: 0.5 }}
                                    >Women Collection 2024</motion.p>
                                <motion.p
                                animate={current === 0 ? 'p2animate' : 'p2start'}
                                    variants={animate1}
                                    transition={{ duration: 0.5,delay:0.5 }}
                                >New Season</motion.p>
                                <motion.div
                                    variants={animate1}
                                    animate={current === 0 ? 'linkAnimate' : 'linkStart'}
                                    transition={{ duration: 0.5,delay:1 }}
                                >
                                <Link reloadDocument onClick={(e) => handleNavigation(e,'Women')} className="ShopNow py-2 px-4" to='/shop'>Shop Now</Link>

                                </motion.div>
                            </div>
                        </div>

                        <div className="bannerBG" >
                            <img alt="banner" className="img-fluid h-100 w-100" src={banner2} />
                            <div className="BannerParagraph d-flex flex-column align-items-center">
                                <motion.p
                                    animate={current === 1 ? 'p1animate' : 'p1start'}
                                    variants={animate2}
                                    transition={{ duration: 0.5 }}
                                    >Men New-Season</motion.p>
                                <motion.p
                                animate={current === 1 ? 'p2animate' : 'p2start'}
                                    variants={animate2}
                                    transition={{ duration: 1,delay:0.5 ,bounce:0.6,type:"spring" }}
                                >Jackets & Coats</motion.p>
                                <motion.div
                                variants={animate2}
                                    animate={current === 1 ? 'linkAnimate' : 'linkStart'}
                                    transition={{ duration: 0.5,delay:1 }}
                                >
                                <Link reloadDocument onClick={(e) => handleNavigation(e,'Men')} className="ShopNow py-2 px-4" to='/shop'>Shop Now</Link>

                                </motion.div>
                            </div>
                        </div>

                        <div className="bannerBG" >
                            <img alt="banner" className="img-fluid h-100 w-100" src={banner3} />
                            <div className="BannerParagraph d-flex flex-column align-items-center">
                                <motion.p
                                    animate={current === 2 ? 'p1animate' : 'p1start'}
                                    variants={animate3}
                                    transition={{ duration: 0.5 }}
                                    >Accessories Collection 2024</motion.p>
                                <motion.p
                                animate={current === 2 ? 'p2animate' : 'p2start'}
                                    variants={animate3}
                                    transition={{ duration: 0.5,delay:0.5 ,bounce:0.6,type:"spring" }}
                                >New Arrivals</motion.p>
                                <motion.div
                                variants={animate3}
                                    animate={current === 2 ? 'linkAnimate' : 'linkStart'}
                                    transition={{ duration: 0.5,delay:1 }}
                                >
                                <Link reloadDocument onClick={(e) => handleNavigation(e,'Accessories')} className="ShopNow py-2 px-4" to='/shop'>Shop Now</Link>

                                </motion.div>
                            </div>
                        </div>
                         
                    </Slider>
                </div>
            </div>
    </div>
)
}

export default Banner
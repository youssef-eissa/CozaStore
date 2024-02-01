import bg from './assets/bg-01.jpg.webp'
import { HeaderSection } from './styledComponents/HeaderSection'
import './Contact.css'
import { TiMessages } from "react-icons/ti";
import { useState } from 'react';
import { Button } from './styledComponents/Button';
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";



function Contact() {
    const [email,setEmail]=useState<string>('')
    const [message,setMessage]=useState<string>('')
    return (
        <div className='container-fluid'>
            <div className='row'>
                <HeaderSection background={bg}>
                <h1>Contact</h1>
        </HeaderSection>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 p-5 d-flex justify-content-center contact'>
                        <div className='col-6 p-5'>
                            <form className='col-12  d-flex flex-column align-items-center'>
                            <h4>Send Us A Message</h4>
                            <div className='col-10 mb-3 d-flex align-items-center p-2'>
                                <TiMessages className='col-2' />
                                <input
                                    className='col-10'
                                    type='email'
                                    placeholder='Your Email Address'
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                            <textarea
                                className='col-10 p-2'
                                value={message}
                                onChange={(e)=>setMessage(e.target.value)}
                                placeholder='How can we help you?'
                            />
                            <Button className='col-10 mt-3' background='black' color='white' colorhover='white' backgroundhover='#717fe0'>Submit</Button>
                        </form>
                        </div>
                        <div className='col-6 p-5 d-flex flex-column justify-content-center'>
                            <div className='col-12 d-flex align-items-center'>
                                <CiLocationOn  className='col-2 align-self-start'/>
                                <div className='d-flex flex-column col-10'>
                                    <h5>Address</h5>
                                    <p >Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
                                </div>
                            </div>
                            <div className='col-12 d-flex align-items-center my-4'>
                                <IoCallOutline  className='col-2 align-self-start'/>
                                <div className='d-flex flex-column col-10'>
                                    <h5>Lets Talk</h5>
                                    <span>+1 800 1236879</span>
                                </div>
                            </div>
                            <div className='col-12 d-flex align-items-center my-4'>
                                <TiMessages  className='col-2 align-self-start'/>
                                <div className='d-flex flex-column col-10'>
                                    <h5>Sale Support</h5>
                                    <span>contact@example.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 map p-0'>
                    <iframe className='col-12 h-100' title="Google Maps Location" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13813.290548563344!2d31.502739849999998!3d30.05628505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1706755181669!5m2!1sen!2seg" width="600" height="450"  loading="lazy" ></iframe>


                </div>
            </div>
    </div>
)
}

export default Contact
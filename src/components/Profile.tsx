import { HeaderSection } from "./styledComponents/HeaderSection"
import { UserData } from "./useQuery/API"
import bg from './assets/bg-01.jpg.webp'
import './Profile.css'
import Checkout from "./Checkout"



function Profile() {
    const { userData } = UserData()
    console.log(userData);
    
    return (
        <div className="container-fluid">
            <div className="row">
                <HeaderSection background={bg}>
                <h1>Profile</h1>
        </HeaderSection>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 profile d-flex py-4 flex-column">
                        <div className="col-12 rounded d-flex justify-content-between userInfo flex-md-row flex-column align-items-center p-4">
                            <div className="col-md-3 col-6 mb-3 mb-md-0 imgBox rounded">
                                <img alt="img" className="img-fluid h-100 w-100" src={userData?.image} />
                            </div>
                            <div className="col-8 d-flex justify-content-center  flex-column">

                                <span>Name : {userData?.firstName } {userData?.lastName}</span>
                                <span>Age : {userData?.age }</span>
                                <span>Email : {userData?.email }</span>
                                <span>Phone : {userData?.phone }</span>
                                <span>Address : {userData?.address?.address }, {userData?.address?.city }</span>
                            </div>
                        </div>
                        <Checkout/>
                    </div>
                </div>
            </div>
    </div>
)
}

export default Profile
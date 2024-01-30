import { HashLoader } from 'react-spinners'

function Loader() {
return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 vh-100 d-flex justify-content-center align-items-center'>
                <HashLoader color='red'/>
            </div>
        </div>
    </div>
)
}

export default Loader
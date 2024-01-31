import './About.css'
import { HeaderSection } from './styledComponents/HeaderSection'
import bg from './assets/bg-01.jpg.webp'
import firstImg from './assets/about-01.jpg.webp'
import secondImg from './assets/about-02.jpg.webp'
function About() {
return (
    <div className='container-fluid'>
        <div className='row'>
            <HeaderSection background={bg}>
                <h1>About</h1>
        </HeaderSection>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-between about p-5'>
                    <div className='col-6 d-flex flex-column'>
                        <h2>Our Story</h2>
                        <p className='col-12'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit. 
                            <br></br>
                            <br></br>

                        Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.
                            <br></br>
                            <br></br>
                        Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                        </p>
                    </div>
                    <div className='col-4 align-self-start rightBox d-flex justify-content-center'>
                        <div className='col-12 imgBox overflow-hidden'>
                            <img alt='img' className='img-fluid h-100 w-100' src={firstImg}/>
                        </div>
                    </div>
                </div>
                <div className='col-12 d-flex justify-content-between flex-row-reverse about p-5'>
                    <div className='col-6 d-flex flex-column'>
                        <h2>Our Mission</h2>
                        <p className='col-12'>
                       Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.
                        </p>
                        <p className='col-12 mt-5'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
                            <br></br>
                            <br></br>
                        - Steve Job’s</p>
                    </div>
                    <div className='col-4  align-self-start leftBox d-flex justify-content-center'>
                        <div className='col-12 imgBox overflow-hidden '>
                            <img alt='img' className='img-fluid h-100 w-100' src={secondImg}/>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    </div>
)
}

export default About
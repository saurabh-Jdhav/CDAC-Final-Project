import React from 'react'
import { NavLink } from 'react-router-dom'
import './zz_all.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <>
      <section className='' id='header'>
        <div className='container-fluid nav_bg'>
          <div className='row'>
             <div className='col-md-6  header-img'>
                

            </div>
            <div id="hometitle" className='col-md-8'>
              <h1 style={{color: '#CD5C5C'}}> Welcome to  <br/><strong className='brand-name'> E-pathology</strong>
              </h1>
              {/* <Carousel>
                <div>
                    <img src="Pathlogin.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="bg1.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="bg1.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
            
                <div className='mt-5 '>
                  <NavLink to="/login" className='btn-get-started'>
                    Get Started
                  </NavLink>

                </div>
            </div>

           




          </div>
        </div>
      </section>
        

    </>
  )
}

export default Home
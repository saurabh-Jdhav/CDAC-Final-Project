import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <>
    <div className="minHeight">
    <div className="container">


<section className="mb-4">


    <h2 className="h1-responsive font-weight-bold text-center my-4" style={{color :"#016a01"}}>Contact us</h2>
   
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row">

        
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

              
                <div className="row">

                    
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control forminputshade"/>
                            <label className="">Your name</label>
                        </div>
                    </div>
                    

                    
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control forminputshade"/>
                            <label className="">Your email</label>
                        </div>
                    </div>
                    
                    
                </div>
              
                  <br/>
              
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control forminputshade"/>
                            <label  className="">Subject</label>
                           
                        </div>
                    </div>
                </div>
              
                <br/>
              
                <div className="row">

                    
                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea forminputshade areaSize"></textarea>
                            <label >Your message</label>
                        </div>

                    </div>
                </div>
              

            </form>

            <div className="text-center text-md-left">
                <Link className="btn btn-success"  to="#">Send</Link>
            </div>
            <div className="status"></div>
        </div>
        

        
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                <strong>Address</strong>
                <p><strong>CDAC Labs</strong></p>
                    <p>Jasola Road <br></br>
					 Opposite chandnichowk, <br></br>
					 MG road,New Delhi 111111</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+91 9999999999 </p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p><strong>For technical support, please contact:</strong></p>
                    <p>sj@gmail.com</p>
                    <p>svj@gmail.com</p>
                </li>
            </ul>
        </div>
       

    </div>

</section>
<br/><br/><br/>


    </div>
    <hr/>
    </div>
    </>
  )
}

export default Contact
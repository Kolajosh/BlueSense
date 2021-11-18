import React, {useState} from 'react'
import './ContactSection.css'
import emailjs from 'emailjs-com';

const Result = () => {
    return(
        <div>
            <p>
                Message sent 
            </p>
        </div>
    )
}

function ContactSection(props) {
    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ntfhzd8', 'template_o5527py', e.target, 'user_sc09DmLC2475WRQJDOeWU')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
          showResult(true);
      };

        // hide result
      setTimeout(()=>{
          showResult(false)
      },5000)
    return (
        <>
            <div className="container">
                <div className='contact-head'>
                <h1>Contact</h1>
                <p>
                Want to connect with <span className='blue'>BlueSense:</span> to discuss possible consulting engagements,<br></br> 
                please get in touch with us via the info/form below. 
                </p>
                </div>

                <form action="" className="form" onSubmit={sendEmail}>
                    <input className= 't-field' type="text" name="name" placeholder="Name"/>
                    <input className= 't-field' type="text" name="email" placeholder="Email"/>
                    <input className= 't-field' type="text" name="phone" placeholder="Phone"/>
                    <input className='message' type="text" name="message" placeholder="Message"/>
                    <input className= 't-field' type="text" name="subject" placeholder="Subject"/>
                    <div className='button-contact'>
                    <button className='c-button'>
                        Submit <i class="fas fa-caret-right"></i>
                    </button>
                        <div className='row'>
                            {
                            result ? <Result/> : null
                            } 
                        </div>

                    
                    </div>
                </form>
                </div>
        </>
    )
}

export default ContactSection

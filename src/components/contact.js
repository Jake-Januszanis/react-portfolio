
import '../css/contact.scss';
import '../css/modals.scss';
import {CgCloseO} from 'react-icons/cg';

const Contact = ({display, close}) => {
    
    if (display === true) {
        Window.onClick = function(event) {
            alert("Window was clicks")
        }
        return (
            <div className="modal-show">

            <div className="contact-container">
            <button onClick={close} className="modal-close-btn" name='contact'><CgCloseO style={{pointerEvents: 'none' }} /></button>


                <h1 className="contact-container__title">Lets work together</h1>

                <form className="contact-form">
                    
                    <div className="contact-form-holder">
                        <input type="email" className="contact-form-input" name="email" required></input>
                        <span className="contact-form-label">Email:</span>
                    </div>

                    <div className="contact-form-holder">
                        <input type="text" className="contact-form-input" name="name" required></input>
                        <span className="contact-form-label">Full Name:</span>
                    </div>

                    <div className="contact-form-holder">
                        <textarea className="contact-form-textarea" rows="5" cols="33" minLength="7" maxLength="500" name="message" required></textarea>
                        <span className="contact-form-label">Message:</span>
                    </div>
                    <button className="submit-button" type="submit">Send</button>
                </form>
            </div>
            </div>
        ) 
    } else {
        return (
            <div className="modal-hide"></div>
        )
    }
}

export default Contact;
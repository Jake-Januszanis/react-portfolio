
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
            <button onClick={close} className="modal-close-btn" name='contact'><CgCloseO style={{pointerEvents: 'none'}} /></button>


                <h1 className="contact-container-title">Lets work together</h1>

                <form className="contact-form" name="contact" method="post">
                    <input type="hidden" name="form-name" value="contact"></input>
                    <div className="contact-form-holder">
                        <input type="email" className="contact-form-input" name="email" placeholder=" " required></input>
                        <label className="contact-form-label" htmlFor="email">Email:</label>
                    </div>

                    <div className="contact-form-holder">
                        <input type="text" className="contact-form-input" name="name" placeholder=" " required></input>
                        <label className="contact-form-label" htmlFor="name">Full Name:</label>
                    </div>

                    <div className="contact-form-holder">
                        <textarea className="contact-form-textarea" type="textarea" rows="5" cols="33" minLength="7" maxLength="500" name="message" placeholder=" " required></textarea>
                        <label className="contact-form-label" htmlFor="message">Message:</label>
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
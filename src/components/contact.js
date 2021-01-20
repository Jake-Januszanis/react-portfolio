
import '../css/contact.scss';
import '../css/modals.scss';

const Contact = ({display, close}) => {
    if (display === true) {
        return (
            <div className="modal-show">

            <div className="contact-container">
                <button onClick={close} name="contact">Close</button>

                <h1 className="contact-container__title">Lets work together</h1>

                <form className="contact-form">
                    
                    <div className="contact-form-holder">
                        <input type="email" className="contact-form-input" required></input>
                        <span className="contact-form-label">Email:</span>
                    </div>

                    <div className="contact-form-holder">
                        <input type="text" className="contact-form-input" required></input>
                        <span className="contact-form-label">Full Name:</span>
                    </div>

                    <div className="contact-form-holder">
                        <textarea className="contact-form-textarea" rows="5" cols="33" required></textarea>
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
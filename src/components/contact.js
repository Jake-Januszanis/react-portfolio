
import '../css/contact.scss';
import '../css/modals.scss';

const Contact = ({display, close}) => {
    if (display === true) {
        return (
            <div className="modal-show">
                Projects Modal
                <button onClick={close} name="contact">Close</button>
            </div>
        ) 
    } else {
        return (
            <div className="modal-hide"></div>
        )
    }
}

export default Contact;
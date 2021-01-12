
import '../css/about.scss';
import '../css/modals.scss';

function About ({display, close}) {
    if (display === true) {
        return (
            <div className="modal-show">
                About Modal
                <button onClick={close} name="about">Close</button>
            </div>
        ) 
    } else {
        return (
            <div className="modal-hide"></div>
        )
    }

}

export default About;
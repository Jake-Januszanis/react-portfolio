
import '../css/resume.scss';
import '../css/modals.scss';

function Resume ({display, close}) {
    if (display === true) {
        return (
            <div className="modal-show">
                Resume Modal
                <button onClick={close} name="resume">Close</button>
            </div>
        ) 
    } else {
        return (
            <div className="modal-hide"></div>
        )
    }

}

export default Resume;

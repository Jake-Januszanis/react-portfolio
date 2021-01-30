
import '../css/resume.scss';
import '../css/modals.scss';
import {CgCloseO} from 'react-icons/cg';

function Resume ({display, close}) {
    if (display === true) {
        return (
            <div className="modal-show">
                <button onClick={close} className="modal-close-btn" name='resume'><CgCloseO style={{pointerEvents: 'none' }} /></button>
                <h1 className="resume-message">Resume coming soon. Will be uploaded in the next coming days. Take a look at my Github in the mean time.</h1>

            </div>
        ) 
    } else {
        return (
            <div className="modal-hide"></div>
        )
    }

}

export default Resume;

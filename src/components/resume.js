
import '../css/resume.scss';
import '../css/modals.scss';
import {CgCloseO} from 'react-icons/cg';

function Resume ({display, close}) {
    if (display === true) {
        return (
            <div className="modal-show">
                Resume Modal
                <button onClick={close} className="modal-close-btn" name='resume'><CgCloseO style={{pointerEvents: 'none' }} /></button>

            </div>
        ) 
    } else {
        return (
            <div className="modal-hide"></div>
        )
    }

}

export default Resume;

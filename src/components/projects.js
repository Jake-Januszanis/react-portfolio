

import '../css/projects.scss';
import '../css/modals.scss';
import {CgCloseO} from 'react-icons/cg';

function Projects ({display, close}) {
    if (display === true) {
        return (
            <div className="modal-show">
                Projects Modal
                <button onClick={close} className="modal-close-btn" name='projects'><CgCloseO style={{pointerEvents: 'none' }} /></button>
            </div>
        ) 
    } else {
        return (
            <div className="modal-hide"></div>
        )
    }

}

export default Projects;
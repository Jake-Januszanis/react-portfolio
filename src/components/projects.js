

import '../css/projects.scss';
import '../css/modals.scss';

function Projects ({display, close}) {
    if (display === true) {
        return (
            <div className="modal-show">
                Projects Modal
                <button onClick={close} name="projects">Close</button>
            </div>
        ) 
    } else {
        return (
            <div className="modal-hide"></div>
        )
    }

}

export default Projects;
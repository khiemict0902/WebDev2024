import './Iconplus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



function Iconplus() {
    return (
        <>
            <Link className='create_post_button' to='/write'>
                <FontAwesomeIcon icon={faPen} />
            </Link>
        </>
    );
}

export default Iconplus;
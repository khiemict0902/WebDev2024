import './Pagination.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'



function pagination() {
    return(
        <>
            <div class='pagination'>
                <a className='pagination_direction previous' href='#'><FontAwesomeIcon icon={faChevronLeft} /></a>
                <a className='active' href='#'>1</a>
                <a href='#'>2</a>
                <a className='pagination_direction next' href='#'><FontAwesomeIcon icon={faChevronRight} /></a>

            </div>
        </>

    ) 
}

export default pagination

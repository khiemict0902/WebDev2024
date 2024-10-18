import './Pagination.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'



function pagination() {
    return(
        <>
            <div class='pagination'>
                <Link className='pagination_direction previous' href='#'><FontAwesomeIcon icon={faChevronLeft} /></Link>
                <Link className='active' href='#'>1</Link>
                <Link href='#'>2</Link>
                <Link href='#'>3</Link>
                <Link href='#'>...</Link>
                <Link href='#'>10</Link>
                <Link className='pagination_direction next' href='#'><FontAwesomeIcon icon={faChevronRight} /></Link>

            </div>
        </>

    ) 
}

export default pagination

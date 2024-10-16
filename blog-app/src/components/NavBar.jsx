import './NavBar.css';
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'



function NavBar(isAdmin) {
  return (
    <>
      <div className='header'>

          <div className="logo">
              <div className="logo_image">
              
              </div>
          </div>

          <div className="search_bar">

            <FontAwesomeIcon className='search_icon' icon={faMagnifyingGlass} />
            <input class="search_input" type="text" />

          </div>
            
          <nav className='navigation'>

            <ul className="nav_list">

              <li className="nav_item"><Link to = "/blogs">HOME</Link></li>
              <li className="nav_item">
                  CATEGORY 
                  <FontAwesomeIcon className = "category_menu_icon" icon={faChevronDown} />
                </li>

              {isAdmin.data && 
                <>

                  <li className="nav_item create_post_button">
                    <Link to = "/write">
                    <FontAwesomeIcon className='create_post_icon' icon={faPlus} />
                      NEW POST
                    </Link></li>
                  <li className="nav_item icon_container">
                      <FontAwesomeIcon className = 'user_icon' icon={faUser} />
                    
                  </li>

                </>        
              }

            </ul>

          </nav>  

      </div>
    </>

  )
}

export default NavBar
import { faMagnifyingGlass, faCartShopping, faBell, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Search() {
    return (
      <div className="navbar">
        <div className="nav-section1">
          <h1 className="nav-section1__title">Udemy</h1>
        </div>
        <div className="nav-section2">
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#050505' }} />
          <input type="text" placeholder="Search for anything here" />
        </div>
        <div className="nav-section3">
          <p>Courses</p>
          <div className="my-learning">
            <p>My Learning</p>
            <div className="my-learning__purchase">
              <p>
                You have not purchased anything.
              </p>
  
            </div>
          </div>
  
          <FontAwesomeIcon icon={faCartShopping} style={{ color: '#0a0a0a' }} />
          <FontAwesomeIcon icon={faBell} style={{ color: '#161717' }} />
          <FontAwesomeIcon icon={faUser} style={{ color: '#000000' }} />
        </div>
        <div className="nav-section4">
        <FontAwesomeIcon icon={faBars} style={{ color: '#0c0d0d' }} />
        </div>
      </div>)
  }

  export default Search
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import './index.css'

export function Header () {

  function handleClick(e) {
    e.preventDefault()
    console.log('hea')
  }
  return (
      <div className="header">
        <a className='logo'>ShopNow</a>
        <a id='menu-icon' className='menu-icon'>
          <FontAwesomeIcon icon={faBars} />        
        </a>
        <div className="middle-header">
          <a href="/">Home</a>
          <a href="/">Products</a>
          <a href="/">About</a>
        </div>
        <button onClick={handleClick} className="header-right">
        </button>
      </div>
  )
}
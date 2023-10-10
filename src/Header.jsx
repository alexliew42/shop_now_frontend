import './index.css'

export function Header () {

  function handleClick(e) {
    e.preventDefault()
    console.log('hea')
  }
  return (
      <div className="header">
        <a className='logo'>ShopNow</a>
        <button onClick={handleClick} className="header-right">
        </button>
      </div>
  )
}
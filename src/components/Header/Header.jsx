import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
        <div className='header-content'>
            <h2 className="header-subtitle">Nina Patisserie</h2>
            <div className="header-text">
                <p>Aqui vai vir algum texto que não sei agora mas com certeza vai ter</p>
                <button>Whatsapp</button>
                <div className="header-videos"></div>
            </div>
            
        </div>
        <div className="header-banner">
            <hr/>
        </div>
    </div>
  )
}

export default Header
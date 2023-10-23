import React from 'react'
import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  
  const headerStyles = {
    backgroundColor: '',
    color: ''
  }

  return (
    <header>
      <div className='container'>
        <h2 style={headerStyles}>{text}</h2>
      </div>
    </header>
  )
}

Header.propTypes = {
  text: PropTypes.string
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'orange',
  textColor: 'pink'
}

export default Header

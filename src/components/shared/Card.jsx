import React from 'react'
import PropTypes from 'prop-types'

function Card({ children, reverse }) {
  return (
    // <div className={`card ${reverse && 'reverse'}`}>
    //       {children}
    // </div>
    <div className='card' style={{
      backgroundColor: reverse ? 'rgba(0, 0, 0, 0.4)' : '',
      color: reverse ? 'white' : 'black'
     }}>
          {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired, //array skulle också funkat
  reverse: PropTypes.bool
}

Card.defaultProps = {
  reverse: false
}

export default Card
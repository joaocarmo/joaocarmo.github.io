// Imports
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../../scss/popup.scss'

const Popup = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <span
      className="popup"
      onClick={() => setIsVisible(!isVisible)}
      onKeyDown={() => setIsVisible(!isVisible)}
      role="button"
      tabIndex="0"
    >
      {children}
      <span className={`popup-content${isVisible ? ' show' : ''}`}>
        {content}
      </span>
    </span>
  )
}

Popup.propTypes = {
  content: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default Popup

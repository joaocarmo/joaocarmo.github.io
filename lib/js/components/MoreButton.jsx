// Imports
import React from 'react'
import PropTypes from 'prop-types'
import '../../scss/morebutton.scss'

const MoreButton = ({ onClick = () => null }) => (
  <button type="button" className="more" onClick={onClick}>
    Let&apos;s go for coffee !
  </button>
)

MoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default MoreButton

// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '@scss/nextbutton'

const NextButton = ({ onClick = () => null }) => (
  <button
    type="button"
    className="next"
    onClick={onClick}
    aria-label="next"
  >
    <FontAwesomeIcon icon={faChevronDown} size="3x" />
  </button>
)

NextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default NextButton

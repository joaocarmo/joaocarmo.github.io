// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../../scss/backbutton.scss'

const BackButton = ({ onClick = () => null }) => (
  <button type="button" className="back" onClick={onClick}>
    <FontAwesomeIcon icon={faTimes} />
  </button>
)

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default BackButton
// Imports
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../../scss/nextbutton.scss'

const NextButton = ({ onClick = () => null }) => (
  <button className='next' onClick={onClick}>
    <FontAwesomeIcon icon={faChevronDown} size='3x' />
  </button>
)

export default NextButton

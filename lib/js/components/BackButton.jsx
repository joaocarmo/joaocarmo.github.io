// Imports
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../../scss/backbutton.scss'

const BackButton = ({ onClick = () => null }) => (
  <button className='back' onClick={onClick}>
    <FontAwesomeIcon icon={faTimes} />
  </button>
)

export default BackButton

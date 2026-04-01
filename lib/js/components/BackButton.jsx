import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import '@scss/backbutton'

const BackButton = ({ onClick = () => null }) => (
  <button type="button" className="back" onClick={onClick} aria-label="back">
    <FontAwesomeIcon icon={faXmark} />
  </button>
)

export default BackButton

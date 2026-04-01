import { useState } from 'react'
import cx from 'clsx'
import '@scss/popup'

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
      <span
        className={cx('popup-content', {
          show: isVisible,
        })}
      >
        {content}
      </span>
    </span>
  )
}

export default Popup

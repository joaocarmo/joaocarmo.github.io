import { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import '@scss/timeline'

const Timeline = {}

const Container = ({ children }) => (
  <div className="timeline">
    {children}
    <article className="timeline-element">
      <div className="timeline-element-inner">
        <div className="timeline-element-icon" />
      </div>
    </article>
  </div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

const Content = ({ children, color, icon, time, title, where, extra }) => {
  const [showExtra, setShowExtra] = useState(false)

  return (
    <article className="timeline-element">
      <div className="timeline-element-inner">
        <div
          className="timeline-element-icon"
          style={color ? { backgroundColor: color } : null}
        >
          {icon}
        </div>
        <div className="timeline-element-content">
          <div className="timeline-element-header">
            <span className="timeline-element-title">{title}</span>
            <span className="timeline-element-time">{time}</span>
          </div>
          <div className="timeline-element-where">{where}</div>
          <div className="timeline-element-text">
            {children}
            {extra && (
              <div className="timeline-element-extra">
                <button
                  type="button"
                  onClick={() => setShowExtra(!showExtra)}
                  className="timeline-extra"
                >
                  {showExtra ? 'show less' : 'show more'}
                </button>
                <div
                  className={clsx(
                    'timeline-element-extra-text',
                    !showExtra && 'element-hidden',
                    showExtra && 'element-visible',
                  )}
                >
                  {extra}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  icon: PropTypes.node,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  where: PropTypes.string,
  extra: PropTypes.node,
}

Content.defaultProps = {
  color: null,
  icon: '',
  where: '',
  extra: '',
}

Timeline.Container = Container
Timeline.Content = Content

export default Timeline

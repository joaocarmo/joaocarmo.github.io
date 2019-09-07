// Imports
import React from 'react'
import PropTypes from 'prop-types'
import '../../scss/timeline.scss'

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

const Content = ({
  children, color, icon, time, title,
}) => (
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
          <span className="timeline-element-title">
            {title}
          </span>
          <span className="timeline-element-time">
            {time}
          </span>
        </div>
        <div className="timeline-element-text">
          {children}
        </div>
      </div>
    </div>
  </article>
)

Content.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  icon: PropTypes.node,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

Content.defaultProps = {
  color: null,
  icon: '',
}

Timeline.Container = Container
Timeline.Content = Content

export default Timeline

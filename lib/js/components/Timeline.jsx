// Imports
import React from 'react'
import '../../scss/timeline.scss'

const Timeline = {}

const Container = ({ children }) => (
  <div className="timeline">
    {children}
    <article className="timeline-element">
      <div className="timeline-element-inner">
        <div className="timelime-element-icon" />
      </div>
    </article>
  </div>
)

const Content = ({
  children, time, title, color,
}) => (
  <article className="timeline-element">
    <div className="timeline-element-inner">
      <div
        className="timelime-element-icon"
        style={{ backgroundColor: color }}
      >
        X
      </div>
      <div className="timelime-element-content">
        <h4>{title} ({time})</h4>
        <p>{children}</p>
      </div>
    </div>
  </article>
)

Timeline.Container = Container
Timeline.Content = Content

export default Timeline

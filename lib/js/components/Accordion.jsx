// Imports
import React from 'react'
import PropType from 'prop-types'

const AccordionContainer = ({ children }) => (
  <ul className="accordion">
    {children}
  </ul>
)

AccordionContainer.propTypes = {
  children: PropType.node.isRequired,
}

const AccordionItem = ({ title, children }) => (
  <li className="accordion">
    <input type="checkbox" defaultChecked className="accordion" />
    <i className="accordion" />
    <h4 className="accordion">{title}</h4>
    <p className="accordion">{children}</p>
  </li>
)

AccordionItem.propTypes = {
  title: PropType.node.isRequired,
  children: PropType.node.isRequired,
}

const Accordion = {
  Container: AccordionContainer,
  Item: AccordionItem,
}

export default Accordion

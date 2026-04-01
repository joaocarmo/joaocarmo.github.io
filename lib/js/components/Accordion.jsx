import '@scss/accordion'

const AccordionContainer = ({ children }) => (
  <ul className="accordion">{children}</ul>
)

const AccordionItem = ({ title, children }) => (
  <li className="accordion">
    <input
      type="checkbox"
      defaultChecked
      className="accordion"
      aria-label="toggle the accordion"
    />
    <i className="accordion" />
    <h4 className="accordion">{title}</h4>
    <article className="accordion">{children}</article>
  </li>
)

const Accordion = {
  Container: AccordionContainer,
  Item: AccordionItem,
}

export default Accordion

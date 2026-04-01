import '@scss/morebutton'

const MoreButton = ({ onClick = () => null }) => (
  <button type="button" className="more" onClick={onClick}>
    Let&apos;s go for coffee !
  </button>
)

export default MoreButton

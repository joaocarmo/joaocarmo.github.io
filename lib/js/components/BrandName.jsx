import { Fragment } from 'react'

const brandName = 'João Carmo'
const tagLines = [
  'Senior Software Engineer',
  'Open-Source Enthusiast',
  'Photographer',
  'Poet',
  'Knower Of things',
  'Coffee Drinker',
]

const BrandName = () => (
  <section id="brandname-section">
    <header>
      <h1>
        <p>{brandName}</p>
      </h1>
      <h4>
        {tagLines.map((tag) => (
          <Fragment key={tag}>{`${tag}. `}</Fragment>
        ))}
      </h4>
    </header>
  </section>
)

export default BrandName

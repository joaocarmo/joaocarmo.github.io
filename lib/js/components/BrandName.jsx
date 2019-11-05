// Imports
import React from 'react'

const brandName = 'João Carmo'
const tagLines = [
  'Frontend Engineer',
  'Backend developer',
  'Open-Source contributor',
  'Photographer',
  'Poet',
  'Knower of things',
  'Coffee drinker',
]

const BrandName = () => (
  <section id="brandname-section">
    <header>
      <h1>
        <p>{brandName}</p>
      </h1>
      <h4>
        {tagLines.map((tag) => (
          <React.Fragment key={tag}>
            {`${tag}. `}
          </React.Fragment>
        ))}
      </h4>
    </header>
  </section>
)

export default BrandName

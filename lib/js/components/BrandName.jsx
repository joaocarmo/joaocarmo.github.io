// Imports
import React from 'react'

const brandName = 'João Carmo'
const tagLines = [
  'Front-end Engineer',
  'Back-end developer',
  'Open-source contributor',
  'Photographer',
  'Poet',
  'Knower of things',
  'Coffee drinker',
]

const BrandName = () => (
  <section id="brandname">
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

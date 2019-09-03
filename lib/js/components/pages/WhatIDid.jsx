// Imports
import React from 'react'
import Accordion from '../Accordion'
import '../../../scss/pages/what-i-did.scss'

const academicSkills = [
  {
    key: 'MEc',
    title: 'M.Econ. in Economics',
    content: 'Instituto Superior de Economia e Gestão',
  },
  {
    key: 'BPh',
    title: 'B.Sc. in Physics',
    content: 'Faculdade de Ciências da Universidade do Porto',
  },
  {
    key: 'BEn',
    title: 'B.Eng. in Electrical Engineering',
    content: 'Escola Superior de Tecnologia e Gestão de Viseu',
  },
  {
    key: 'Sec',
    title: 'Portuguese Secondary School',
    content: 'Escola Secundária Alves Martins',
  },
]

const WhatIDid = () => (
  <>
    <h2>...and our second date</h2>
    <div className="top-spacer" />
    <p className="idented smaller justified">
      All I can say is that I&apos;m very passionate about learning and figuring
      out how stuff works. My education has been a long road through many
      different, and often distant, places. Regardless, it brought me here and
      made me what I am today. Ask me anything !
    </p>
    <div className="mid-spacer" />
    <div id="academic">
      <div className="leftcol" />
      <div className="middlecol">
        <Accordion.Container>
          {academicSkills.map(({ key, title, content }) => (
            <Accordion.Item title={title} key={key}>
              {content}
            </Accordion.Item>
          ))}
        </Accordion.Container>
      </div>
      <div className="rightcol" />
    </div>
  </>
)

export default WhatIDid

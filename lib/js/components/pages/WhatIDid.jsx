// Imports
import React from 'react'
import Accordion from '../Accordion'
import { scrollToElement } from '../../functions'
import '../../../scss/pages/what-i-did.scss'

const academicSkills = [
  {
    key: 'MEc',
    title: 'M.Econ. in Economics',
    content: (
      <>
        <strong>Institution</strong>
        <br />
        Lisbon School of Economics & Management — Universidade de Lisboa
        {' '}
        <i>(Portugal)</i>
        <br />
        <br />
        <strong>Years attended</strong>
        <br />
        2014 — 2018
        <br />
        <br />
        <strong>Topics addressed</strong>
        <br />
        Econometrics, Macroeconomics, Microeconomics, Economic Growth,
        Labour Economics, Monetary Theory, Finance, Banking & Insurance,
        Behavioural Economics, Mathematics, Computational Economics
        <br />
        <br />
        <strong>Thesis</strong>
        <br />
        <a
          href="https://www.repository.utl.pt/handle/10400.5/15048"
          target="_blank"
          rel="noopener noreferrer"
        >
          Modeling stock markets through the reconstruction of market processes
        </a>
      </>
    ),
  },
  {
    key: 'BPh',
    title: 'B.Sc. in Physics',
    content: (
      <>
        <strong>Institution</strong>
        <br />
        Faculdade de Ciências da Universidade do Porto
        {' '}
        <i>(Portugal)</i>
        <br />
        <br />
        <strong>Years attended</strong>
        <br />
        2011 — 2014
        <br />
        <br />
        <strong>Topics addressed</strong>
        <br />
        Physics, Mathematics, Programming, Physics Laboratory
      </>
    ),
  },
  {
    key: 'BEn',
    title: 'B.Eng. in Electrical Engineering',
    content: (
      <>
        <strong>Institution</strong>
        <br />
        Escola Superior de Tecnologia e Gestão de Viseu
        {' '}
        <i>(Portugal)</i>
        <br />
        <br />
        <strong>Years attended</strong>
        <br />
        2008 — 2011
        <br />
        <br />
        <strong>Topics addressed</strong>
        <br />
        Mathematics, Physics, Programming, Circuit Theory, Microelectronics,
        Power Electronics, Electrical Installations, Electrical Machines,
        Robotics, Control Systems, Digital Systems, Automation, Networks,
        Signal Processing
      </>
    ),
  },
  {
    key: 'Sec',
    title: 'Sciences and Technologies (Secondary)',
    content: (
      <>
        <strong>Institution</strong>
        <br />
        Escola Secundária Alves Martins
        {' '}
        <i>(Portugal)</i>
        <br />
        <br />
        <strong>Years attended</strong>
        <br />
        2004 — 2007
        <br />
        <br />
        <strong>Topics addressed</strong>
        <br />
        Mathematics, Physics, Chemistry, Biology, Geology, English, Portuguese,
        Philosophy
      </>
    ),
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
      made me what I am today.
      {' '}
      <a
        href="#what-i-like"
        onClick={(e) => scrollToElement(e, 'what-i-like')}
      >
        Ask me anything
      </a>
      !
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

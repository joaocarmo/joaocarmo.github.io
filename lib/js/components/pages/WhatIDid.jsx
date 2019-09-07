// Imports
import React from 'react'
import Accordion from '../Accordion'
import Timeline from '../Timeline'
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

const experience = [
  {
    key: 'four',
    title: 'Full Stack Engineer / UNIX Systems Admin',
    time: '2017-now',
    content: (
      <>
        Develops internal applications and automations as a full-stack developer integrating server/database maintenance and security protocol standards.
        Defines, designs and implements network communications and solution improvements using the UNIX platform.
        Proposes and implements system enhancements (software and hardware updates) that will improve the performance and reliability of the system.
        Manages the load configuration of a central data communication processor and makes recommendations for purchase or upgrade of data networks.
        Coordinates terminal orders and cable installation, network system planning, upgrading, monitoring, testing and servicing.
        Approves action requests and specifies purchase requirements.
        Negotiates and places orders with common carriers.
      </>
    ),
    color: '',
    icon: '',
  },
  {
    key: 'three',
    title: 'Full Stack Engineer',
    time: '2016-2017',
    content: (
      <>
        Design, implement and manage internal IT support web portal and knowledge base.
        Work with IT teams on planning, organizing, writing, editing and publishing instructional and operational documents related to IT services and products.
        Implement self-service web apps for IT support process automation as a full-stack web developer.
        Create programs to perform data analysis and generate system reports.
      </>
    ),
    color: '',
    icon: '',
  },
  {
    key: 'two',
    title: 'IT Logistics',
    time: '2015-2016',
    content: (
      <>
        Monitoring and responding to the IT Logistics support queues;
        <br />
        Assist in the SAP PC asset audit;
        <br />
        Work with global IT team on the technology refresh (TR) process;
        <br />
        Monitoring and recording employee termination activities;
        <br />
        Development of Excel Macros in VBA
      </>
    ),
    color: '',
    icon: '',
  },
  {
    key: 'one',
    title: 'Academic Research Internship',
    time: '2012-2013',
    content: 'Statistical study on the atmospheric properties of transiting planets.',
    color: '',
    icon: '',
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
        <h4 className="academic-title">Education</h4>
        <Accordion.Container>
          {academicSkills.map(({ key, title, content }) => (
            <Accordion.Item title={title} key={key}>
              {content}
            </Accordion.Item>
          ))}
        </Accordion.Container>
        <h4 className="academic-title">Experience</h4>
        <Timeline.Container>
          {experience.map(({
            key, title, time, content, color,
          }) => (
            <Timeline.Content
              title={title}
              time={time}
              key={key}
              color={color}
            >
              {content}
            </Timeline.Content>
          ))}
        </Timeline.Container>
      </div>
      <div className="rightcol" />
    </div>
  </>
)

export default WhatIDid

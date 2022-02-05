import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFlask,
  faGlobe,
  faLaptopCode,
  faMicroscope,
  faProjectDiagram,
  faRobot,
  faUniversity,
} from '@fortawesome/free-solid-svg-icons'
import Accordion from '@js/components/Accordion'
import Timeline from '@js/components/Timeline'
import { scrollToElement } from '@js/functions'
import '@scss/pages/what-i-did'

const academicSkills = [
  {
    key: 'MEc',
    title: 'M.Econ. in Economics',
    content: (
      <>
        <strong>Institution</strong>
        <br />
        Lisbon School of Economics &amp; Management — Universidade de Lisboa{' '}
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
        Econometrics, Macroeconomics, Microeconomics, Economic Growth, Labour
        Economics, Monetary Theory, Finance, Banking &amp; Insurance,
        Behavioural Economics, Mathematics, Computational Economics
        <br />
        <br />
        <strong>Dissertation</strong>
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
        Faculdade de Ciências da Universidade do Porto <i>(Portugal)</i>
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
        Escola Superior de Tecnologia e Gestão de Viseu <i>(Portugal)</i>
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
        Robotics, Control Systems, Digital Systems, Automation, Networks, Signal
        Processing
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
        Escola Secundária Alves Martins <i>(Portugal)</i>
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
    key: 'seven',
    title: 'Senior Software Engineer',
    time: 'Jun 2021 - now',
    content: (
      <p>
        Member of the frontend team behind the cloud software application for
        data sharing and analysis. Working with React, Docker, Go, Python,
        OpenAPI, Google Cloud (Kubernetes).
      </p>
    ),
    color: 'hsl(0, 0%, 0%)',
    icon: <FontAwesomeIcon icon={faMicroscope} color="white" />,
    where: 'ONI (Oxford Nanoimaging Limited)',
  },
  {
    key: 'six',
    title: 'Senior Software Engineer',
    time: 'Jun 2020 - Jun 2021',
    content: (
      <>
        <p>
          Member of the international Software Engineering team responsible for
          developing and maintaining several IP applications used by the R&amp;D
          department.
        </p>
        <p>
          Technologies used include, but are not limited to: JavaScript
          (vanilla, jQuery, React), SASS, Python 2/3 (Pylons, SQLAlchemy), SQL
          Server, PostgreSQL, ElasticSearch, GitLab CI, Docker, Bash.
        </p>
      </>
    ),
    color: 'hsl(300, 100%, 25%)',
    icon: <FontAwesomeIcon icon={faFlask} color="white" />,
    where: 'Amyris, Inc.',
  },
  {
    key: 'five',
    title: 'Frontend Engineer',
    time: 'Dec 2019 - Jun 2020',
    content: (
      <>
        <p>
          Member of the IT Engineering Team behind the InterNations GO! project
          working as a frontend engineer on the public facing web application.
        </p>
        <p>
          Technologies used included Vue.js, SCSS, Twig, Swagger UI, Site-
          Spect, Docker, AWS, CircleCI, PHP, Symfony, MySQL, GitHub, Bash,
          Python, ElasticSearch, TrackJS, Zeplin and Jira.
        </p>
      </>
    ),
    color: 'hsl(300, 80%, 35%)',
    icon: <FontAwesomeIcon icon={faProjectDiagram} color="white" />,
    where: 'InterNations',
  },
  {
    key: 'four',
    title: 'Full Stack Engineer',
    time: 'Jun 2017 - Dec 2019',
    content: (
      <>
        <p>
          Development of an internal web application for asset management.
          Technologies used included React.js, Semantic UI, Webpack, Python,
          Flask, MongoDB.
        </p>
        <p>
          Maintaining several legacy internal web applications. Technologies
          used included jQuery, CSS, Perl, MS SharePoint (API).
        </p>
        <p>
          Development of several micro service utilities such as Python
          Libraries / Modules, CLI applications (POSIX compliant) and system
          maintenance scripts.
        </p>
      </>
    ),
    extra: (
      <p>
        Other duties included developing internal applications and automations
        as a full stack engineer integrating server/database maintenance and
        security protocol standards. Defining, designing and implementing
        network communications and solution improvements using the UNIX
        platform. Propose and implement system enhancements (software and
        hardware updates) that would improve the performance and reliability of
        the system. Coordinating terminal orders and cable installation, network
        system planning, upgrading, monitoring, testing and servicing. Approve
        action requests and specify purchase requirements. Negotiate and place
        orders with common carriers.
      </p>
    ),
    color: 'hsl(300, 60%, 45%)',
    icon: <FontAwesomeIcon icon={faLaptopCode} color="white" />,
    where: 'Synopsys, Inc.',
  },
  {
    key: 'three',
    title: 'Full Stack Engineer',
    time: 'Mar 2016 - Jun 2017',
    content: (
      <>
        <p>
          Development of an internal web application for asset inventory.
          Technologies used included React.js, Bootstrap, Webpack, Node.js,
          Express.js, MongoDB.
        </p>
        <p>
          Development of an internal web application for personnel directory.
          Technologies used included React.js, Semantic UI, Webpack, Ruby, Ruby
          on Rails, SQL Server, ElasticSearch.
        </p>
      </>
    ),
    extra: (
      <p>
        Other duties included design, implement and manage internal IT support
        web portal and knowledge base. Work with IT teams on planning,
        organizing, writing, editing and publishing instructional and
        operational documents related to IT services and products. Implement
        self-service web apps for IT support process automation as a full-stack
        web developer. Create programs to perform data analysis and generate
        system reports.
      </p>
    ),
    color: 'hsl(300, 40%, 45%)',
    icon: <FontAwesomeIcon icon={faGlobe} color="white" />,
    where: 'Synopsys, Inc.',
  },
  {
    key: 'two',
    title: 'IT Logistics',
    time: 'Aug 2015 - Feb 2016',
    content: (
      <p>
        Development of MS Excel Macros in VBA to automate repetitive
        administrative tasks. Monitoring and responding to the IT Logistics
        support queues. Assist in the SAP PC asset audit process. Work with the
        global IT teams on the technology refresh (TR) process. Monitoring and
        recording employee termination activities.
      </p>
    ),
    extra: '',
    color: 'hsl(300, 20%, 45%)',
    icon: <FontAwesomeIcon icon={faRobot} color="white" />,
    where: 'Synopsys, Inc.',
  },
  {
    key: 'one',
    title: 'Academic Research Internship',
    time: '2012-2013',
    content:
      'Statistical study on data compiled from several published papers on selected atmospheric properties of transiting planets.',
    extra: '',
    color: 'hsl(180, 25%, 36%)',
    icon: <FontAwesomeIcon icon={faUniversity} color="white" />,
    where: 'Centro de Astrofísica da Universidade do Porto',
  },
]

const WhatIDid = () => (
  <>
    <h2>...and a cold beer</h2>
    <div className="top-spacer" />
    <p className="idented smaller justified">
      All I can say is that I&apos;m very passionate about learning and figuring
      out how stuff works. My education has been a long road through many
      different, and often distant, places. Regardless, it brought me here and
      made me what I am today. It shaped{' '}
      <a href="#what-i-like" onClick={(e) => scrollToElement(e, 'what-i-like')}>
        what I like to do
      </a>
      !
    </p>
    <div className="mid-spacer" />
    <div id="academic">
      <div className="leftcol" />
      <div className="middlecol">
        <h4 className="academic-title">Experience</h4>
        <Timeline.Container>
          {experience.map(
            ({ key, title, time, content, extra, where, icon, color }) => (
              <Timeline.Content
                key={key}
                title={title}
                time={time}
                where={where}
                icon={icon}
                color={color}
                extra={extra}
              >
                {content}
              </Timeline.Content>
            ),
          )}
        </Timeline.Container>
        <h4 className="academic-title">Education</h4>
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

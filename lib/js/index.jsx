import ReactDOM from 'react-dom'
import Wonderland from './components/Wonderland'
import setup from './setup'
import '@scss/index.scss'

setup()

ReactDOM.render(<Wonderland />, document.getElementById('main'))

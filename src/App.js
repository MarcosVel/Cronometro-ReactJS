import { Component } from 'react';
import Cronometro from './assets/crono.png';
import './styles.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <img src={ Cronometro } className="img" />
        <p className="timer">0.0</p>
        <div className='areaBtn'>
          <a className="btn">VAI</a>
          <a className="btn">LIMPAR</a>
        </div>
      </div>
    )
  }
}

export default App;
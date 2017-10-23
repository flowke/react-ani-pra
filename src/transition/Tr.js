import React from 'react'
import ReactDOM from 'react-dom'
import { Transition } from 'react-transition-group'

import './tr.css';



class Example extends React.Component {
  state = { textShow: false }

  buttonClick = ()=> {
    this.setState({textShow: !this.state.textShow})
  }

  render() {
    const { textShow } = this.state;
    return (
      <div>
          <button onClick={this.buttonClick}>
              toggle
          </button>
          <div>
              <Transition in={textShow} timeout={300}>
                  {(state) => {

                      console.log(state);

                      return <div
                          className={`fade-init fade-${state}`}
                             >
                          React
                      </div>
                  }}
              </Transition>
              fsd
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Transition} from 'react-transition-group';

import './tr.css'

// in => true
// exited -> entering
// timeout 的时间之后, entered
//
// in => false
// entered -> exiting
// timeout 的时间之后, exited


class Tr extends Component{

    state = {inCtrl: true}

    btnClick = ()=>{
        this.setState({inCtrl: !this.state.inCtrl})
    }

    render(){

        let {inCtrl} = this.state;

        return (
            <div>
                <button
                    onClick={this.btnClick}
                >click</button>
                <div>
                    <Transition
                        timeout={{enter: 300, exit: 3000}}
                        in={inCtrl}
                        // enter={false}
                        // exit={false}
                        appear
                        // mountOnEnter
                        // unmountOnExit
                        // onEnter={()=> console.log('before entering')}
                        // onEntering={()=> console.log('after entering')}
                        // onEntered={()=> console.log('after entered')}
                        // onExit={()=> console.log('before exiting')}
                        // onExiting={()=> console.log('after exiting')}
                        // onExited={()=> console.log('after exited')}
                    >
                        {
                            (status)=> {
                                console.log(status, inCtrl);
                                return (
                                    <div
                                        className={`fade-init fade-${status}`}
                                    >React</div>
                                )
                            }
                        }
                    </Transition>
                </div>
            </div>

        )
    }
}

ReactDOM.render(
    <Tr/>,
    document.getElementById('root')
);

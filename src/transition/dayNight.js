import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Transition,} from 'react-transition-group';
import './dayNight.css'

class DayNight extends Component{
    state = { night: false}

    switchClick = ()=>{
        this.setState({night: !this.state.night})
    }

    render(){
        let {night} = this.state;
        return (
            <Transition
                enter={false}
                timeout={0}
                in={night}
            >
                {status => {
                    // console.log(status);
                    return (
                        <div className={`fullpage night-${status}`}>
                            {/* {status} */}
                            <div className="section">
                                <div className="time-circle">
                                    <div className="sun"></div>
                                    <div className="moon">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div className="stars">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div className="water"></div>
                                </div>

                                <div
                                    id={`switch`}
                                    className={`switch-${status}`}
                                    onClick={this.switchClick}
                                >
                                    <div id="circle"></div>
                                </div>
                            </div>
                        </div>

                    )}}
            </Transition>

        )
    }
}
ReactDOM.render(<DayNight />, document.getElementById('root'))

import React, { Component } from 'react';
import {Transition} from 'react-transition-group';

const duration = {enter: 400, exit: 2000};

const defaultStyle = {
  // transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  padding: 20,
  display: 'inline-block',
  backgroundColor: '#8787d8'
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 }
};

function Fade({in: inProp}){
    return (
        <Transition
            in={inProp}
            timeout={duration}
            // mountOnEnter={true}
            // unmountOnExit={true}
            // appear={true}
            // enter={false}
            exit={false}
            // addEndListener={ ()=>{} }
            onEnter={e=>{console.log('onEnter');}}
        >
            {
                state => {
                    console.log(state);
                    return (
                        <div
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state],
                                transition: `opacity ${duration}ms ease-in-out`
                            }}
                        >
                            Fade
                        </div>
                    )

                }
            }
        </Transition>
    )
}

export default {
    Fade
};

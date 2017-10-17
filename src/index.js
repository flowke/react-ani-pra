import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Ani from './App';
import registerServiceWorker from './registerServiceWorker';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            show: false,
            moli: {a:1, b:2}
        }
    }

    fadeClick = ev => {
        this.setState( ({show}) =>(
            {show: !show}
        ))
        // this.setState( ({moli}) => {
        //     return {moli: {...moli,a:5} }
        // });
        //
        // this.setState(({moli})=>{return {moli: {...moli, b:6}} });

    }

    componentDidUpdate(){
        // console.log(this.state.moli);
    }

    render(){
        let {show} = this.state;

        return (
            <div>
                <button onClick={this.fadeClick}>click</button>
                <Ani.Fade
                    in={show}
                />
                {this.props.children()}
            </div>
        )
    }
}

let a = function (a){
    console.log(a);
}(444)

ReactDOM.render(
    <App>
        {
            ()=>(<div>aaa</div>)
        }
    </App>
    , document.getElementById('root'));
registerServiceWorker();

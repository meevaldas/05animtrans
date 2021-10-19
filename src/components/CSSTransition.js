import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class CssTransition extends Component{
    state={
        show:true
    }

    showDiv = () => {
        this.setState({
            show: !this.state.show
        });
    }

    render(){
        return(
            <div>
                <CSSTransition
                    in={this.state.show}
                    timeout={500}
                >
                    <div className={`cssSq ${this.state.show}`}>Hello</div>
                </CSSTransition>
                <hr />
                <button onClick={this.showDiv}>
                    Toggle
                </button>
            </div>
        )
    }
}

export default CssTransition;

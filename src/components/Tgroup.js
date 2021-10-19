import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Tgroup extends Component{
    state = {
        items:['33','43', '99']
    }

    showElements () {
        return this.state.items.map((item,id)=>(
           <CSSTransition
               key={id}
               classNames="item"
               timeout={1000}
               appear={true}
           >
               <div className="item">{item}</div>
           </CSSTransition>
        ))
    }

    generateNumber(){
        let newArray =[
            ...this.state.items,
            Math.floor(Math.random()*100)+1
            ];

        this. setState({
            items:newArray
        })
    }

    removeNumber(){
        let newArray = this.state.items.slice(0,-1);

        this. setState({
            items:newArray
        })
    }

    render(){
        return(
            <div>
                <TransitionGroup
                component="div"
                className="list">
                    {this.showElements()}
                </TransitionGroup>

                <div className="btns">
                    <button onClick={()=> this.generateNumber()}>Add Element</button>
                    <button onClick={()=> this.removeNumber()}>Remove Element</button>
                </div>
            </div>
        )
    }
}

export default Tgroup;
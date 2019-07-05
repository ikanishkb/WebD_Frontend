import React, { Component } from 'react'

export default class Book extends Component {

    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this);
        this.state = {
            count: 1
        };
    }
    
    // state = {
    //     count :1
    // };

    // handleClick(){
    //     console.log('clicked');
    //     console.log(this.state.count);
        
    // }
    
    addcount = () =>{
        this.setState({
            count:this.state.count + 1
        });
    };
    remcount = () =>{
        this.setState({
            count:this.state.count - 1
        });
    };
    rescount = () =>{
        this.setState({
            count: 0
        });
    };

    render() {
        const {img, title, author} = this.props.info;
        return (
            <div>
                {/* <h3>book:{this.props.info.book}</h3>
                    <h5>author:{this.props.info.author}</h5> */}
                <img src = {img} width="150"></img>       
                <h4>Title: {title}</h4> 
                <h6>Author: {author}</h6>
                <h5>count: {this.state.count}</h5>
                {/* <button type="button" onClick={this.handleClick}>Add Count</button> */}
                <button type="button" onClick={this.addcount}>Increase Count</button>
                <button type="button" onClick={this.rescount}>Reset Count</button>
                <button type="button" onClick={this.remcount}>Decrease Count</button>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Book extends Component {
    render() {
        const {img, title, author} = this.props.info;
        return (
            <div>
                {/* <h3>book:{this.props.info.book}</h3>
                    <h5>author:{this.props.info.author}</h5> */}
                <img src = {img} width="150"></img>       
                <h4>Title: {title}</h4> 
                <h6>Author: {author}</h6>
            </div>
        )
    }
}

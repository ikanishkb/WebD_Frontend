import React, { Component } from 'react'
import Book from './Book'
import Bookdata from './bookData'   

export default class Booklist extends Component {
    // state = {
    //     books:[
    //         {
    //             book:'book #1',
    //             author:'john doe'
    //         },
    //         {
    //             book:'book #2',
    //             author:'bob doe'
    //         },        
    //         {
    //             book:'book #3',
    //             author:'peter doe'
    //         },
    //         {
    //             book:'book #4',
    //             author:'david doe'
    //         }
    //     ]
    // };   
    constructor(props){
        super(props);
        this.state = {
            books : Bookdata
        };
    }
    render() {
            // const books = this.state.books.map((data) => data.book);
        // console.log(books);
        
        return (
            <section>
                <h3>This is our Booklist</h3>
                {this.state.books.map(item => (
                    <Book info={item} key={item.id}></Book> //better to use id instead of index
                    )
                )}
            </section>
        );      
    }
}
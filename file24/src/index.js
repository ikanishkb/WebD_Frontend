import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
// import './index.css' 

const btntxt = "Text";

function Books() {
    const btn = "search btn";
  return (
    <Fragment>
      <Book/>   
      <button>{btn}</button>
      <button>{btntxt}</button>
    </Fragment>
    );
}

const Book = () =>{
  return (
    <Fragment>
      <CoverImage/>
      <Title/>
      <Author name="Douglas Peterson"/>
    </Fragment>
  )
}

const CoverImage = () =>{
  return(
    <img src="https://www.bookbaby.com/images/book-cover-design-basic.png"></img>
  )
}

const Title = () => {
  return(
    <h2>How to study smart</h2>
  )
}

const Author = (props) =>{
    console.log(props);
  return(
    <h4>{props.name} </h4>
  )
}

ReactDOM.render(<Books/>, document.getElementById('root'));
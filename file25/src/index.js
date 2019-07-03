import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const Person = ({image,name,job,children}) =>{ //props objects passed as arguments   
    return(
        <div className="person">
            <img src={`https://randomuser.me/api/portraits/thumb/men/${image}.jpg`} alt="person"></img>
            <h4>{name}</h4>
            <h4>{job}</h4>
            {children}
        </div>
    )
}

const PersonList =() =>{
    return(
        <div className="person-list">
        <Person image="34" name="john" job="developer" />
        <Person image="22" name="bob" job="designer">
            <p>Sit incididunt nostrud labore sit quis aliquip anim voluptate excepteur mollit.   </p>
        </Person>
        <Person image="56" name="david" job="the boss" />
        </div>
    )
}

ReactDOM.render(<PersonList/>, document.getElementById('root') )
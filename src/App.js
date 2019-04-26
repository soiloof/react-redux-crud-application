import React from 'react';
import PropTypes from'prop-types';


//class App extends Component {
//render() {
//  //const greeting = "Hi!!";
//  //const dom = <h1>{greeting}</h1>;
//  //return dom;
//  return(
//    <React.Fragment>
//      <label htmlFor="bar">bar</label>
//      <input type="text" onChange={() => {console.log("I am clicked!")}}/>
//    </React.Fragment>
//  )
//}
//}
const App = () => {
  const profiles =[
    {name:"Taro",age:10},
    {name:"Hanako",age:13},
    {name:"Noname"}
  ]
  return (
    <div>
      {
        profiles.map((profile,index)=>{
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props)=>{
  return <div>Hi, I am {props.name} and {props.age}!</div>
}

User.PropTypes = {
  name:PropTypes.string,
  age:PropTypes.number

}


export default App;

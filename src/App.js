import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useForm} from './useForm'

function App() {
  // *
  const [{count, count2}, setCount] = useState({count: 0, count2:20});

  // Using external useState hook:
  // const [email,setEmail] = useState("");
  // const [password,setPassword] = useState("");

  const [values, handleChange] = useForm({email: "", password: ""});
  const [values2, handleChange2] = useForm({name: "", lastName: "", age: ""});

  return (
    <div className="form">
      <h1>Combined states</h1>
      <button onClick = {() => 
        setCount(currentState => ({
          // Another way is to separate in different states
          // (one for [count, setCount] = React.useState(0)
          // and a different one for [count2, setCount2] = React.useState(10), see *)
          count: currentState.count + 1,
          count2: currentState.count2 + 5
          }
          )
        )
      } >+</button>
      <p>Count1: {count}</p>
      <p>Count2: {count2}</p>

      <h1>Separated states</h1>
      <label htmlFor="email">Email</label>
      <input type="text" name = "email" value = {values.email} id="email"
      onChange = {handleChange}/><br/>
      <label htmlFor="password">Password</label>
      <input type="password" name = "password" value = {values.password} id="password"
      onChange = {handleChange} />
      <h2>Name</h2>
      <label htmlFor="name">Name</label>
      <input type="text" name = "name" value = {values2.name} id="name"
      onChange = {handleChange2}/><br/>
      <label htmlFor="lastname">Last Name</label>
      <input type="text" name = "lastname" value = {values2.lastName} id="lastname"
      onChange = {handleChange2} /><br/>
      <label htmlFor="age">Age</label>
      <input type="text" name = "age" value = {values2.age} id="age"
      onChange = {handleChange2} />
    </div>
  );
}

export default App;

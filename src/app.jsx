import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css" ;
import axios from "axios";


function App(){
const [object, setObject] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: ""
})

function change(e){
    const {name, value} = e.target;
    setObject({...object,[name]:value})
}
function click(e){
e.preventDefault();
axios.post("http://localhost:4000/signup",object);
    setObject({
        fullName: "",
        userName: "",
        email: "",
        password: ""
    })
}

console.log(object);
    return <div>
<div className="container">
    <div className="form-div">
        <form onSubmit={click}>
            <input className="form-control form-group" type="text" placeholder="Full Name" name="fullName" onChange={change} value={object.fullName}/>
            <input className="form-control form-group" type="text" placeholder="User Name" name="userName" onChange={change} value={object.userName}/>
            <input className="form-control form-group" type="email" placeholder="Email" name="email" onChange={change} value={object.email}/>
            <input className="form-control form-group" type="password" placeholder="Password" name="password" onChange={change} value={object.password}/>
<button type="submit" className="btn btn-lg btn-dark">Subscribe</button>
        </form>
    </div>
</div>
    </div>
}



export default App;
import React from "react";
import './App.css';
import Login from "./Container/Login";
import Register from "./Container/Register";
import Recover from "./Container/Recover";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Admin from "./Container/Admin";

const  App=()=> {
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Admin' element={<Admin/>} />
        <Route path='/Recover' element={<Recover/>} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

// function App() {
  
//   return (
//     <Router>
//     <div>
//     <Switch>
//     <Route path="/about">
//       <Register />
//     </Route>
//     <Route path="/users">
//       <Users />
//     </Route>
//     <Route path="/Login">
//       <Login />
//     </Route>
//   </Switch>
// </div>
// </Router>
// const Login=()=> {
// return <h2>Login</h2>;
// }

// function About() {
// return <h2>About</h2>;
// }

// function Users() {
// return <h2>Users</h2>;
// }
//   <div className="App">
//       <Register/>
//       <Login/>
//    </div>
//  );
// }

export default App;

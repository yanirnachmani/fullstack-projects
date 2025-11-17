import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Comp } from './Comp';


function Home(){
  return <h2>Home Page</h2>
}

function About(){
  return <h2>About</h2>
}

function Contact(){
  return <h2>Contact</h2>
}


function App() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home Page</Link> | {" "}
        <Link to='/about'>about</Link> | {" "}
        <Link to='/contact'>Contact Us</Link> | {" "}
        <Link to='/comp'>Comp</Link> | {" "}
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/comp' element={<Comp/>}></Route>
      </Routes>
      
    </Router>
  );
}

export default App;

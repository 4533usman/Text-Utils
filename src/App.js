import About from './components/About';
import Nav from './components/Navbar';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Form from './components/Form';
import Alert from './components/Alert';
function App(props) {
  const [alert, setAlert] = useState(null);
const showalert=(msg,type)=>{
  setAlert({
    msg: msg,
    type:type
  });
  setTimeout(()=>{
    setAlert(null)
  },1000)
}
  const [mode, setmode] = useState('light');
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.background = '#141429'
      showalert("Dark Mode Has Been Enabled","Success")
    }
    else {
      setmode('light')
      document.body.style.background = '#ffff'
      showalert("Light Mode Has Been Enabled","Success")
    }
  }
  return (
    <>
      
      <Router>
        <Nav Name="Text-Utils" togglemode={togglemode} mode={mode} />
        <Alert alert={alert}/>
        <Routes>
          <Route path="/about" element={<About mode={mode} />}>
          </Route>
          <Route path="/" element={<Form mode={mode} showalert={showalert} />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
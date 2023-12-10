
import Navbar from './components/Navbar';
import Textadd from './components/Textadd.js';
import './App.css';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert.js';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(){
  const [mode,setmode] = useState('light');
  const [alert, setalert] = useState(null);
  // const [hariyo, sethariyo] = useState('');
    const showAlert=(message,type)=>{
      setalert({
        msg:message,
        type:type,
      })
    }
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode is enabled","success");
      // document.title='Dark Mode On';
      // setInterval(() => {
      //   document.title='Amazing App';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Download?';
      // }, 1500);
      }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode is enabled','success');
      // document.title='Light Mode On';
    }
    // const togglehariyo=()=>{
    //   if(hariyo==='light'){
    //     sethariyo('green');
    //     document.body.style.backgroundColor='green';
    //   }
  //   else{
  //     sethariyo('light');
  //     document.body.style.backgroundColor='white';
  //   }
  // }
  }
  return(
   
    <>
       <Navbar title="MyApp" About="About us" toggleMode={toggleMode} mode={mode} />
        {/* <Navbar/> */}
        <Alert alert={alert}/>
        <div className="container">
        <Textadd heading="Enter your text here" mode={mode}/>
              {/* <Router>
               <Routes> */}
                   {/* <Route path="/" element={} /> */}
                   {/* <Route path="/about" element={<About />} /> */}
                   {/* <Route path="/contact" element={<Contact />} /> */}
                {/* </Routes> */}
             {/* </Router> */}
        </div>

    </>
  )
}

export default App;

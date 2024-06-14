import logo from './logo.svg';
import './App.css';
import Navbarr from './components/Navbarr';
import TextForm from './components/TextForm';

function App() {
  return (
   <>

<Navbarr title="TEXTUTILS" aboutText="About textutils"/>
  {/* <Navbarr/> */}
  <div className="container my-3 " >

  <TextForm heading="enter text to analyze"/>
  </div>
   </>
  );
}

export default App;

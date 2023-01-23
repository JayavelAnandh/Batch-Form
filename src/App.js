import logo from './logo.svg';
import './App.css';
import Base from './Base/base';
import Studentdetails from './Base/student';
function App() {
  return (
    <div className='App'>
        <Base 
          title = "Batch Details"
          description ="All student Details">
            <Studentdetails/>
          </Base>
    </div>
    
  );
}

export default App;

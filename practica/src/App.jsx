import logo from './logo.svg';
import './App.css';
import header from './components/header';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [IsValid, setIsValid] = useState (false);
const component = IsValid
           ? <MainControl count={count}/>
           : <FormAddMoney setCount={setCount} setIsValid ={setIsValid} />

return (
    <div className="App">
      {count}
      <Header/>
      {component}
      
     
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import * as fcl from "@onflow/fcl"
import { helloworld } from './flow/scripts/hello';
import { useState } from 'react';
import { change } from './flow/transactions/hello';




fcl.config()
 .put("accessNode.api","https://rest-testnet.onflow.org")
 .put("discovery.wallet","https://fcl-discovery.onflow.org/testnet/authn")
 .put("0xDomains","0xd8c25d6a285a4d80")


function App() {
  var newd ="";
  var newd2 ="";

  const [disp, setdisp] = useState("")
  const getdata = async ()=>{
    const data = await helloworld()
    console.log(data)
    setdisp(data)

  }
  const changedata = async()=>{
    change(newd , newd2)
  }

  
  const newdata =(val)=>{
    newd = val.target.value
   console.log(newd)
  }

  const newdata2 =(val)=>{
    newd2 = val.target.value
   console.log(newd)
  }

  return (
    <div className="App">
      <header className="App-header">
        <form>
            <button type="button" onClick={fcl.logIn}>Login</button>
            <button type="button" onClick={fcl.unauthenticate}>Logout</button>
            <button type='button' onClick={getdata}>Get Hello world</button>
            {/* <button type='button' onClick={setdisp("")}>Get Hello world</button> */}
            
            <h1>{disp}</h1>
        
        </form>
      </header>
    </div>
  );
}

export default App;

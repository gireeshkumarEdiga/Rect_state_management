// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const changeCount1 = () => {
      setCount(count+1);
  };
  const changeCount2 = () => {
    setCount(count-1);
};
  const changeDouble = () => {
    setCount(count*2);
  };


  // const changeCount = (value) => {
  //     //setCount(count+value);
  //     setCount((prev) => {
  //       if(prev === 10){
  //         return 0;
  //       }
  //       return prev+value;
  //     })
  // };

  // if(count > 10){
  //   return <div>Counter Reached max value</div>;
  // }

  return (
    <div className="App">
      <h3>Counter:{count}</h3>
      <button onClick={() => changeCount1()}>Increment</button>
      <button onClick={() => changeCount2()}>Decrement</button>
      <button onClick={() => changeDouble()}>Double</button>
      {/* <div>Counter is {count % 2===0 ? "Even" : "Odd"}</div> */}
    </div>
  );
}

export default App;
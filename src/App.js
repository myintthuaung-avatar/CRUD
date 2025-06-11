//import React from 'react';
//import { Provider } from 'react-redux';
import UserTable from './UserTable.jsx';
//import store from './store';
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h2>User Data Table</h2>
      <UserTable />
    </div>
  );
}
// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     </Provider>
//   );
// }

export default App;
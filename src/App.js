import  { useState } from 'react';
//import { Provider } from 'react-redux';
import Appbar from './Components/Appbar.jsx'
import UserTable from './UserTable.jsx';
import UserForm from './Components/UserForm.jsx';
//import store from './store';
//import logo from './logo.svg';
//import './App.css';


function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Thein Zaw', age: 25 },
    { id: 2, name: 'Myint Thu Aung', age: 30 },
  ]);

  return (
    <div style={{ padding: 20 }}>
      <Appbar/>
      <h2>User List</h2>
      <UserForm setUsers={setUsers} />
      <UserTable users={users} setUsers={setUsers} />
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